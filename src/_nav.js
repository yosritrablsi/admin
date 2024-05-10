import React from 'react';
import CIcon from '@coreui/icons-react';
import {
  cilChartPie,
  cilNotes,
  cilSpeedometer,
} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

const utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
const role = utilisateur ? utilisateur.roles : [];
const id = utilisateur ? utilisateur.id : '';

const isModscolairte = role && role.includes('ROLE_MODSCOLARITE');
const isAdmin = role && role.includes('ROLE_ADMIN');
const isBibliothecaire = role && role.includes('ROLE_BIBLIOTHÉCAIRE');

const navItems = role ? 
  (isModscolairte
    ? [
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboardreprographe',
          icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
        {
          component: CNavTitle,
          name: 'tache',
        },
        {
          component: CNavGroup,
          name: 'gérer',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Demande',
              to: '/Demandeliste',
            },
            {
              component: CNavItem,
              name: 'Demande accepté',
              to: '/Accepteddemande',
            },
          ],
        },
        {
          component: CNavItem,
          name: 'espace Personnel',
          to: `/demandeuser/${id}`,
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        },
      ]
    : isAdmin
    ? [
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboard',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
        {
          component: CNavTitle,
          name: 'tache',
        },
        {
          component: CNavGroup,
          name: 'gérer',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'formation',
              to: '/forms/admin/formation',
            },
            {
              component: CNavItem,
              name: 'evenement',
              to: '/forms/admin/event',
            },
            {
              component: CNavItem,
              name: 'reunion',
              to: '/forms/admin/Reunion',
            },
          ],
        },
        {
          component: CNavItem,
          name: 'User',
          to: '/User',
          icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
        },
      ]
    : isBibliothecaire
    ? [
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboardbiblio',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
        {
          component: CNavTitle,
          name: 'Tâche',
        },
        {
          component: CNavGroup,
          name: 'Espace Bibliothécaire',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Livres',
              to: '/forms/bibliotéque/bibliotecaire',
            },
            {
              component: CNavItem,
              name: 'liste de demande',
              to: '/forms/bibliotéque/lesemprunte', // Assurez-vous que cette route correspond à votre composant DemandeEmprunt
            },
            {
              component: CNavItem,
              name: 'liste des emprunts ',
              to: '/forms/bibliotéque/input-group', // Assurez-vous que cette route correspond à votre composant DemandeEmprunt
            },
          ],
        },
        {
          component: CNavItem,
          name: 'Widgets',
          to: '/widgets',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
          badge: {
            color: 'info',
            text: 'NEW',
          },
        },
      ]
    : []
  )
  : []; // Si aucun rôle n'est défini, la barre de navigation sera vide

export default navItems;
