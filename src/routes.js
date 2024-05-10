import React from 'react'

//Forms
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Demandeliste = React.lazy(() => import('./views/forms/Gerer/Dmandeliste'))
const Demandeuser = React.lazy(() => import('./views/forms/Gerer/Demande'))

const Reunion = React.lazy(() => import('./views/forms/admin/Reunion/Reunion'))
const Ressource = React.lazy(() => import('./views/forms/admin/ressource/Ressource'))
const UpdateEventForm = React.lazy(() => import('./views/forms/admin/event/UpdateEventForm'))
const Ajouterevent = React.lazy(()=> import('./views/forms//admin/event/ajouterevent'))
const Formation = React.lazy(() => import('./views/forms/admin/formation/Formation'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const event = React.lazy(() => import('./views/forms/admin/event/Event'))
const Envoyerdemande = React.lazy(()=> import('./views/forms/Gerer/Envoyerdemande'))
const Accepterdemande = React.lazy(()=> import('./views/forms/Gerer/Accepteddemande'))

const User = React.lazy(() => import('./views/User/User'))
const Ajouterformation = React.lazy(() =>import('./views/forms/admin/formation/Addformation'))
const Updateformation = React.lazy(()=> import('./views/forms/admin/formation/Updateformation'))
const Consulterformation = React.lazy(()=> import('./views/forms/admin/formation/Consulterformation'))
const Participationformation = React.lazy(()=> import('./views/forms/admin/formation/Participationformation'))

const Consulterreunion = React.lazy(()=> import('./views/forms/admin/Reunion/Consulterreunion'))

const Updatereunion = React.lazy(()=> import('./views/forms/admin/Reunion/Updatereunion'))
const Ajouterreunion = React.lazy(() =>import('./views/forms/admin/Reunion/Addreunion'))
const Ajouterressource = React.lazy(() =>import('./views/forms/admin/ressource/Ajouterressource'))
const Updateressource = React.lazy(()=> import('./views/forms/admin/ressource/Updateressource'))
const Login = React.lazy(()=> import('./components/header/AppHeaderDropdown'))
const Logout = React.lazy(()=> import('./components/header/AppHeaderDropdown'))
const Register = React.lazy(()=> import('./components/header/AppHeaderDropdown'))
const Profil=React.lazy(()=>import ('./views/pages/profil/Profil'))
const UpdateProfil=React.lazy(()=>import ('./views/pages/profil/Updateprofil'))
const ConsulterEvent = React.lazy(() => import('./views/forms/admin/event/ConsulterEvent'))
const Participerevent=React.lazy(()=>import ('./views/forms/admin/event/Participerevent'))
const Participationreun=React.lazy(()=>import ('./views/forms/admin/Reunion/Participationreun'))


const bibliotecaire = React.lazy(() => import('./views/forms/bibliotéque/bibliotecaire/bibliotecaire'))
const Emprunter =React.lazy(()=>import('./views/forms/bibliotéque/bibliotecaire/Emprunter'))
const Updatebibliotecaire = React.lazy(()=> import('./views/forms/bibliotéque/bibliotecaire/Updatebibliotecaire'))
const Ajouterbibliotecaire = React.lazy(() =>import('./views/forms/bibliotéque/bibliotecaire/Addbibliotecaire'))
const InputGroup = React.lazy(() => import('./views/forms/bibliotéque/input-group/InputGroup'))
const lesemprunte = React.lazy(() => import('./views/forms/bibliotéque/lesemprunte/lesemprunte'))
const DashboardBiblio =React.lazy(()=> import ('./views/dashboard/dashboardBiblio/Dashboard'))
const dashboardreprographe =React.lazy(()=> import ('./views/dashboard/dashboardReprographe/Dashboard'))


const Updateddemande =React.lazy(()=> import ('./views/forms/Gerer/Updatedemande'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/User', name: 'User', element: User },
  { path: '/forms/admin', name: 'Forms', element: Formation, exact: true },
  { path: '/forms/admin/formation', name: 'Form Control', element: Formation },
  { path: '/forms/admin/event', name: 'event', element: event },
  { path: '/forms/admin/Reunion', name: 'Checks & Radios', element: Reunion },
  { path: '/forms/admin/Updatereunion/:id', name: 'Updatereunion', element: Updatereunion },
  {path: '/forms/admin/Addreunion', name: 'Addreunion', element: Ajouterreunion},
  {path: '/consulterreunion/:id', name: 'Addreunion', element: Consulterreunion},
  {path: '/participationreunion/:id', name: 'Addreunion', element: Participationreun},

  { path: '/forms/admin/ressource', name: 'ressource', element: Ressource },
  { path: '/forms/admin/UpdateEventForm/:id', name: 'UpdateEventForm', element: UpdateEventForm },
  { path: '/forms/admin/Ajouterevent', name: 'Ajouterevent', element: Ajouterevent },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/Demandeliste', name: 'Demande', element: Demandeliste },
  { path: '/Accepteddemande', name: 'Demande', element: Accepterdemande },
  { path: '/demandeuser/:userId', name: 'Demande', element: Demandeuser },

  
  {path: '/forms/admin/Addformation', name: 'Ajouterformation', element: Ajouterformation},
  {path: '/forms/admin/Updateformation/:id', name: 'Updateformation', element: Updateformation},
  {path: '/consulterformation/:id', name: 'consulterformation', element: Consulterformation},
  {path: '/Participationformation/:id', name: 'Participationformation', element: Participationformation},

  
  {path: '/forms/admin/Ajouterressource', name: 'Ajouterressource', element: Ajouterressource},
  {path: '/forms/admin/Updateressource/:id', name: 'Updateressource', element: Updateressource},
  {path: '/login', name: 'Login', element: Login},
  {path: '/logout', name: 'Logout', element: Logout},
  { path: '/forms/envoyerdemande/:userId', name: 'Envoyerdemande', element: Envoyerdemande },
  { path: '/forms/Updatedemande/:id', name: 'Modifier Demande', element: Updateddemande },


  {path: '/register', name: 'Register', element: Register},
  {path: '/profile/:id', name:'profil',element:Profil},
  {path: '/updateprofile/:id', name:'updateprofil',element:UpdateProfil},
  {path: '/consulterevent/:id', name: 'ConsulterEvent', element: ConsulterEvent },
  {path:'/forms/admin/Participerevent/:id', name:'participerevent',element:Participerevent},
  {path: '/Emprunter/:userId/:livreId', name:'Emprunter',element:Emprunter},
{path: '/forms/bibliotéque/lesemprunte' , name:'lesemprunte' , element:lesemprunte},
{ path: '/forms/bibliotéque/input-group', name: 'Input Group', element: InputGroup },
{ path: '/forms/bibliotéque/bibliotecaire', name: 'Checks & Radios', element: bibliotecaire },
  { path: '/forms/bibliotéque/Updatebibliotecaire/:id', name: 'Updatebibliotecaire', element: Updatebibliotecaire },
     {path: '/forms/bibliotéque/Addbibliotecaire', name: 'Addbibliotecaire', element: Ajouterbibliotecaire},
     {path: '/dashboardbiblio', name: 'Addbibliotecaire', element:DashboardBiblio },
     {path: '/dashboardreprographe', name: 'Addbibliotecaire', element:dashboardreprographe },


]

export default routes
