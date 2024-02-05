<template>
  <h1>welcome to afk</h1>
</template>

<script setup lang="ts">
onMounted(() => {
  Notification.requestPermission().then((perm) => {
    const notification = new Notification("Example notification", {
      body: "This is more text",
      data: { hello: "world" },
      icon: "Logo.png",
      tag: "Welcome Message", // make it unique identifier to be overwritten
    });

    notification.addEventListener("error", (e) => {
      console.error(e);
    });
  });

  let notification: Notification;
  let interval: NodeJS.Timeout;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      const leaveDate = new Date();
      interval = setInterval(() => {
        notification = new Notification("Come back please", {
          body: `You have been gone for ${Math.round(
            (new Date().getTime() - leaveDate.getTime()) / 1000
          )} seconds`,
          tag: "Come back",
        });
      }, 5000);
    } else {
      if (interval) clearInterval(interval);
      if (notification) notification.close();
    }
  });
});
</script>
