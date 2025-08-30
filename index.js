const mqtt = require("mqtt");
const fs = require("fs");

const protocol = 'mqtts';
const host = process.env.MQTT_HOST;
const port = process.env.MQTT_PORT;
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 10_000,
  username:  process.env.MQTT_USERNAME, // isi sesuai dashboard
  password: process.env.MQTT_PASSWORD, // isi sesuai dashboard
  reconnectPeriod: 1000,
  ca: fs.readFileSync('/Users/NRacooo/coding/getJob/backend/src/emqxsl-ca.crt'),
});

client.on("connect", {/*Publish & Subscribe */})
