"use client";

import {
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

function createSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function buildTocFromContainer(container: HTMLElement | null): TocItem[] {
  if (!container) return [];

  const headings = Array.from(
    container.querySelectorAll<HTMLHeadingElement>("h2, h3"),
  );

  const ids = new Set<string>();
  return headings
    .map((heading, index) => {
      const rawText = heading.textContent?.trim() ?? "";
      if (!rawText) return null;

      const level = heading.tagName === "H2" ? 2 : 3;
      const baseId = heading.id || createSlug(rawText) || `secao-${index + 1}`;
      let nextId = baseId;
      let suffix = 1;

      while (ids.has(nextId)) {
        suffix += 1;
        nextId = `${baseId}-${suffix}`;
      }

      ids.add(nextId);
      if (heading.id !== nextId) {
        heading.id = nextId;
      }

      return {
        id: nextId,
        text: rawText,
        level,
      } satisfies TocItem;
    })
    .filter((item): item is TocItem => item !== null);
}

function ManualSidebarMenu() {
  const { isMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(
      '[data-manual-content="true"]',
    );

    const refresh = () => {
      setTocItems(buildTocFromContainer(container));
    };

    const rafId = requestAnimationFrame(refresh);
    if (!container) return () => cancelAnimationFrame(rafId);

    const observer = new MutationObserver(() => {
      refresh();
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [pathname]);

  const getTopMenuOffset = useCallback(() => {
    const topMenu = document.querySelector<HTMLElement>(
      '[data-top-menu="true"]',
    );
    const menuHeight = topMenu?.getBoundingClientRect().height ?? 0;
    return menuHeight + 8;
  }, []);

  const handleMenuItemClick = useCallback(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [isMobile, setOpenMobile]);

  const handleAnchorClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault();
      const target = document.getElementById(id);
      if (!target) return;

      const offset = getTopMenuOffset();
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.history.pushState(null, "", `#${id}`);
      const finalTop = Math.max(targetTop, 0);
      const startTop = window.scrollY;
      const distance = finalTop - startTop;
      const duration = 180;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion || distance === 0) {
        window.scrollTo(0, finalTop);
      } else {
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        let startTime: number | null = null;
        const animate = (now: number) => {
          if (startTime === null) {
            startTime = now;
          }
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutCubic(progress);
          window.scrollTo(0, startTop + distance * eased);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }

      handleMenuItemClick();
    },
    [getTopMenuOffset, handleMenuItemClick],
  );

  const menuItems = useMemo(
    () =>
      tocItems.map((item) => (
        <SidebarMenuItem key={item.id}>
          <SidebarMenuButton
            asChild
            className="h-auto items-start whitespace-normal text-white hover:bg-emerald-800/70 hover:text-white"
            onClick={handleMenuItemClick}
          >
            <a
              href={`#${item.id}`}
              onClick={(event) => handleAnchorClick(event, item.id)}
              className={item.level === 3 ? "pl-6" : undefined}
            >
              <p className="py-0 text-sm font-medium leading-snug">
                {item.text}
              </p>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )),
    [tocItems, handleAnchorClick, handleMenuItemClick],
  );

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {menuItems}
          {tocItems.length === 0 ? (
            <SidebarMenuItem>
              <SidebarMenuButton className="h-auto items-start whitespace-normal text-white">
                <p className="py-0 text-sm font-medium leading-snug"></p>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) : null}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export default function ManualSidebarLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider defaultOpen className="[&_[data-slot=sidebar-gap]]:hidden">
      <Sidebar
        side="left"
        collapsible="offcanvas"
        className="z-40 pt-14 group-data-[side=left]:border-r-0"
      >
        <SidebarContent className="bg-emerald-900 text-white backdrop-blur-sm [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ManualSidebarMenu />
        </SidebarContent>
      </Sidebar>

      <SidebarInset className="min-h-svh bg-transparent">
        <SidebarTrigger className="fixed top-4.5 left-2 z-50 bg-emerald-900/90 text-white backdrop-blur-sm hover:bg-emerald-900/90 hover:text-white/70" />
        <div className="">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
