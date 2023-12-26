import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navbarSupportedContent', { static: false }) navbarContent:
    | ElementRef
    | undefined;
  @ViewChild('horiSelector', { static: false }) horiSelector:
    | ElementRef
    | undefined;
  @ViewChild('.navbar-collapse', { static: false }) navbarCollapse:
    | ElementRef
    | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialization logic goes here
  }

  ngAfterViewInit(): void {
    this.test();
    this.handleResize();
  }

  test(): void {
    if (this.navbarContent && this.horiSelector) {
      const tabsNewAnim = this.navbarContent.nativeElement;
      const selectorNewAnim = tabsNewAnim.querySelectorAll('li').length;
      const activeItemNewAnim = tabsNewAnim.querySelector('.active');
      const activeWidthNewAnimHeight = activeItemNewAnim?.clientHeight;
      const activeWidthNewAnimWidth = activeItemNewAnim?.clientWidth;
      const itemPosNewAnimTop = activeItemNewAnim?.getBoundingClientRect().top;
      const itemPosNewAnimLeft =
        activeItemNewAnim?.getBoundingClientRect().left;

      if (this.horiSelector.nativeElement) {
        this.horiSelector.nativeElement.style.top = itemPosNewAnimTop + 'px';
        this.horiSelector.nativeElement.style.left = itemPosNewAnimLeft + 'px';
        this.horiSelector.nativeElement.style.height =
          activeWidthNewAnimHeight + 'px';
        this.horiSelector.nativeElement.style.width =
          activeWidthNewAnimWidth + 'px';
      }

      tabsNewAnim.addEventListener('click', (e: { target: HTMLElement; }) => {
        const target = e.target as HTMLElement;
        if (target && target.tagName === 'LI') {
          const lis = tabsNewAnim.querySelectorAll('li');
          lis.forEach((li: { classList: { remove: (arg0: string) => any; }; }) => li.classList.remove('active'));
          target.classList.add('active');

          const activeWidthNewAnimHeight = target.clientHeight;
          const activeWidthNewAnimWidth = target.clientWidth;
          const itemPosNewAnimTop = target.getBoundingClientRect().top;
          const itemPosNewAnimLeft = target.getBoundingClientRect().left;

          if (this.horiSelector && this.horiSelector.nativeElement) {
            this.horiSelector.nativeElement.style.top =
              itemPosNewAnimTop + 'px';
            this.horiSelector.nativeElement.style.left =
              itemPosNewAnimLeft + 'px';
            this.horiSelector.nativeElement.style.height =
              activeWidthNewAnimHeight + 'px';
            this.horiSelector.nativeElement.style.width =
              activeWidthNewAnimWidth + 'px';
          }
        }
      });
    }
  }

  handleResize(): void {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.test();
      }, 500);
    });
  }

  handleNavbarToggleClick(): void {
    if (this.navbarCollapse && this.navbarCollapse.nativeElement) {
      const navbarCollapseElement = this.navbarCollapse.nativeElement;
      navbarCollapseElement.style.transition = 'height 0.3s ease-in-out';
      navbarCollapseElement.style.display = 'block';

      setTimeout(() => {
        navbarCollapseElement.style.height =
          (navbarCollapseElement.scrollHeight || '') + 'px';
      }, 0);

      setTimeout(() => {
        navbarCollapseElement.style.height = '';
        navbarCollapseElement.style.transition = '';
        navbarCollapseElement.style.display = '';
        this.test();
      }, 300);
    }
  }
}
