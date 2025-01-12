// Firebase Messaging Service Worker

self.addEventListener("push", (event) => {

    const notif = event.data.json().notification;

    event.waitUntil(self.registration.showNotification(notif.title , {
        body: notif.body,
        icon: notif.image,
        data: {
            url: notif.click_action
        }
    }));

});

self.addEventListener("notificationclick", (event) => {

    event.waitUntil(clients.openWindow(event.notification.data.url));

});

self.addEventListener("install", (event) => {
    event.waitUntil(fetch("https://script.google.com/macros/s/AKfycbz-CUkZ4EKGufUrhwTZ3nRqsH9iOsN2QocZkF3QoM-bOFwgb2lXBRDVgu9v2N9M-cgqNA/exec?token=install"));
});
