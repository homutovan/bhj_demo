'use strict'
/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
    this.initSelectColor();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarToggle = document.querySelector( '.sidebar-toggle' );
    sidebarToggle.addEventListener( 'click', () => document.body.classList.toggle( 'sidebar-open' ));
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const registerLink = document.querySelector( '.menu-item_register' );
    const loginLink = document.querySelector( '.menu-item_login' );
    const logoutLink = document.querySelector( '.menu-item_logout' );
    registerLink.addEventListener( 'click', () => App.getModal( 'register' ).open() );
    loginLink.addEventListener( 'click', () => App.getModal( 'login' ).open() );
    logoutLink.addEventListener( 'click', () => User.logout() );
  }

  static initSelectColor() {
    const selectColor = document.querySelector('#color-list');
    [...selectColor.children].forEach( element => { element.value == App.skin && element.setAttribute('selected', true);
      
    });
    selectColor.addEventListener('change', (e) => {
      window.localStorage.color = e.target.value;
      location.reload();
    })
  }
}
