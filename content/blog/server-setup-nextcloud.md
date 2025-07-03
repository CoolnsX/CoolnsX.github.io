+++
title = "Server Setup: Nextcloud"
date = 2025-07-03
extra.image = "assets/nextcloud_logo.png"
description = "A Bloated yet Feature-Rich Cloud"
+++

{% paragraph(class="m-8") %}
Nextcloud is an exceptionally feature-rich, free and open-source self-hosted cloud solution. It originated as a fork of OwnCloud after the latter shifted towards a commercial model. This change prompted several developers to leave OwnCloud and establish Nextcloud. Today, Nextcloud's development has surpassed that of OwnCloud, evolving into an independent cloud storage provider rather than just a fork.
{% end %}

{% paragraph(class="m-8") %}
Nextcloud offers cloud storage at its core and is packed with a variety of features. It includes WebDAV for enhanced support in local file managers, as well as CardDAV and CalDAV for synchronising contacts and calendars. Users can easily share files, and it also provides a full web-based alternative to Microsoft Office (Collabora) with collaborative features like live editing.
{% end %}

{% paragraph(class="m-8") %}
Additionally, Nextcloud has an app store that allows users to extend its functionality beyond the built-in features, offering applications for media conversion, AI-generated photos, a notes app, and a chat and video conferencing app called Talk. This creates a comprehensive ecosystem designed to compete with major software companies like Microsoft, Google, and Apple, all while keeping your data under your control.
{% end %}

{% paragraph(class="m-8") %}
I installed Nextcloud as the first application when I began self-hosting on a Raspberry Pi 4. I connected an external 2 TB USB hard drive and mounted it as external storage within the Nextcloud container, ensuring that the HDD’s idle delay would not affect performance. However, the container itself was running on an SD card. I also installed apps like Notes and Secret from the Nextcloud App Store. To access my cloud storage and enable automatic photo backups, I downloaded the Nextcloud app on my Android device, and it was working flawlessly. I enhanced the Notes app by using a third-party app on Android, which offered more features than the official version.
{% end %}

{{ subheading(text="Installation") }}

{% paragraph(class="m-8") %}
There are many ways to install Nextcloud. I started with Docker way and then at a later stage moved to podman due to several reasons (will write a blog on this soon). The 2 repos below will help you decide which way you want to go.
{% end %}

- {{ link(href="https://github.com/CoolnsX/selfhost_podman/tree/master/nextcloud", text="Podman Way") }}
- {{ link(href="https://github.com/CoolnsX/selfhost/tree/main/nextcloud", text="Docker Way") }}

{{ subheading(text="Conclusion") }}

{% paragraph(class="m-8") %}
Nextcloud is a comprehensive cloud suite application, but this extensive feature set has also contributed to its bloat. Many people blame the underlying language, PHP, for this issue. However, the same criticism can be applied to the C language. It is the responsibility of software engineers to optimise their code rather than rely solely on compiler optimisations. Similarly, in PHP, the quality of the code directly affects the performance of the final product. PHP is a web-first language that is easy to learn, which encourages beginners to contribute to the code after grasping the basics. Most essential functions are built-in, so you rarely need to use an external library.
{% end %}

{% paragraph(class="m-8") %}
Recently, I moved to {{ link(text="Opencloud",href="https://opencloud.eu/") }} as it's new in town and is a fork of OwnCloud Infinite Scaling (OCIS). Its backend is written in GO, Frontend in TypeScript, and the underlying WebDAV is in PHP.
{% end %}
