import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  menu:any[] = [
    { 
      name: 'Inicio', 
      icon: 'home', 
      type: 'link', 
      url: '/' 
    },
    { 
      name: 'Perfil', 
      icon: 'person', 
      type: 'accordion',
      submenu: [
        { name: 'Historial', icon: 'person', url: '/' },
        { name: 'Cambiar contraseña', icon: 'person', url: '/' }
      ]
    },
    { 
      name: 'Novedades', 
      icon: 'fiber_new', 
      type: 'link', 
      url: '/' 
    },
    { 
      name: 'Favoritos', 
      icon: 'star', 
      type: 'link', 
      url: '/' 
    },
    { 
      name: 'Ajustes', 
      icon: 'settings', 
      type: 'link', 
      url: '/' 
    }
  ]

  constructor() { }
}
