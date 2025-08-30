# mqtt_config

Proyek ini adalah contoh konfigurasi koneksi ke MQTT broker menggunakan Node.js dan library [`mqtt`](https://www.npmjs.com/package/mqtt).

## Konfigurasi

1. **File Environment**  
   Buat file `.env.development` di root folder dengan isi seperti berikut:
   ```
   MQTT_HOST=Your_mqtt_host
   MQTT_USERNAME=Your_mqtt_usename
   MQTT_PASSWORD=Your_mqtt_password
   MQTT_PORT=8883
   ```
   - Ganti `Your_mqtt_host`, `Your_mqtt_usename`, dan `Your_mqtt_password` sesuai dengan data dari dashboard broker MQTT Anda.
   - Pastikan port sesuai dengan konfigurasi broker (misal: 8883 untuk koneksi SSL/TLS).

2. **Certificate**  
   Pastikan Anda memiliki file sertifikat CA (misal: `emqxsl-ca.crt`) dan sesuaikan path pada kode:
   ```js
   ca: fs.readFileSync('/path/to/emqxsl-ca.crt')
   ```

3. **Instalasi Dependensi**
   ```
   npm install
   ```

4. **Menjalankan Program**
   ```
   node index.js
   ```

## Catatan
- Pastikan file `.env.development` dan file sertifikat tidak di-commit ke repository publik.
- Untuk pengaturan lebih lanjut, lihat dokumentasi [mqtt.js](https://github.com/mqttjs/MQTT.js).
