import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideFirebaseApp(() =>
       initializeApp({"projectId":"autonoma-84d41",
        "appId":"1:525989852167:web:0526a189d779a04ced66a2",
        "storageBucket":"autonoma-84d41.appspot.com",
        "apiKey":"AIzaSyAp8yfaWbz7g-xzBSyN89J1gaTNo9ogNak",
        "authDomain":"autonoma-84d41.firebaseapp.com",
        "messagingSenderId":"525989852167",
        "measurementId":"G-0HQDYY46CQ"})), 
        provideAuth(() => getAuth()),
         provideAnalytics(() => getAnalytics()), 
         ScreenTrackingService, UserTrackingService,
          provideFirestore(() => getFirestore()), 
          provideStorage(() => getStorage()),

         
        
  ]
                 
};


