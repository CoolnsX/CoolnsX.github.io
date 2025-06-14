+++
title = "Server Setup: Back Story"
date = 2025-06-14
extra.image = "assets/server-setup.png"
description = "My Motivation Behind Setting Up a Server."
+++

**Short Answer: Cause I like it!**

{% paragraph(class="m-8") %}
I purchased my first computer, a {{ link(text="Raspberry Pi 4,",href="https://raspberrypi.com/products/raspberry-pi-4-model-b/specifications/") }} after landing my first job. This was during the Raspberry Pi shortages following COVID-19, and it cost me around {{ cost(amount=17500) }}. Being somewhat new to Single Board Computer, I was eager to try out the Raspberry Pi 4. Additionally, I bought a 2 TB external HDD, which I'm still using for storage. People often asked me why I chose to set up a home server instead of just buying a cheap VPS. I explained that it is a matter of personal preference and you can pull the plug as a last resort. I have configured various services like Nextcloud, Servarr, and Jellyfin. To access them publicly, I utilized {{ link(text="Cloudflare Tunnel,",href="https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/") }} and everything was running smoothly.
{% end %}

{% paragraph(class="m-8") %}
I signed up for the {{ link(text="Oracle Free Tier",href="https://www.oracle.com/cloud/free/") }} because I noticed in the Cloudflare Tunnel Terms of Service that using sites that serve media is prohibited. However, since {{ link(text="Clouldflare have removed serving media restriction",href="https://blog.cloudflare.com/updated-tos/") }} from their Terms, it might be worth trying again. The motive for buying VPS is to set up {{ link(text="Tailscale VPN",href="https://tailscale.com/") }} to access my services publicly. The server I deployed is ARM-based with 4 cores, 24 GB of RAM, and 200 GB of storage, all of which fall within the limits of their Free Tier.
{% end %}

{{ image(url="assets/oracle-free-tier.webp",alt="Oracle Free Tier Server") }}

{% paragraph(class="m-8") %}
I purchased a second-hand {{ link(text="Lenovo M720q mini-PC",href="https://icecat.biz/en-in/p/lenovo/10t7001hus/thinkcentre-pcs-workstations-m720q-59221980.html") }} with CPU upgraded to i5-8500 (it comes with i5-8400T from the factory) in May 2024 which cost me around {{ cost(amount=17848) }} to replace my Raspberry Pi 4. The performance upgrade was significant; for example, Nextcloud became more responsive, and Jellyfin can now transcode faster than I can watch. My download speed is primarily limited by my internet connection. I also bought a gigabit switch and repurposed the Raspberry Pi 4 for home monitoring. It now runs Pi-hole and Home Assistant. Additionally, I created two ESPHome nodes: one monitors the conditions inside the server cabinet, while the other tracks the environmental conditions outside. Recently I sold my Raspberry Pi 4 and purchased a {{ link(text="Raspberry Pi 5",href="https://www.raspberrypi.com/products/raspberry-pi-5/") }} with additional peripherals for {{ cost(amount=12633) }}, migrating all the services from the Raspberry Pi 4 to the Raspberry Pi 5.
{% end %}
