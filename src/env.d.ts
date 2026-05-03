/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    requestId: string;
  }

  interface SessionData {
    visits: number;
    lastVisit: Date;
    creationFocus: string;
  }
}
