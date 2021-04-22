

export default class CommonStore  {
   token: string | null = window.localStorage.getItem('jwt');
   appLoaded = false;
}
