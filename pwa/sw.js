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
    fetch("https://script.google.com/macros/s/AKfycbzXkfvkATsgKTY5XGDY9HCftb-vgUtRFcmUUJjUaoIRO3mgNHRLxbc7xK3vyCOTt7oH5A/exec?token=install");
});
