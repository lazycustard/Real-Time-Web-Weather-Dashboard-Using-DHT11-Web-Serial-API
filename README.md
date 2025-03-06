# Real-Time-Web-Weather-Dashboard-Using-DHT11-Web-Serial-API
## 📌 Project Overview
This project implements a **real-time weather monitoring system** utilizing a **DHT11 sensor** interfaced with an **Arduino microcontroller**. The **Web Serial API** enables direct communication between the **Arduino** and a **web-based dashboard**, built with **HTML, CSS, and JavaScript**, for live data visualization.

---

## 🛠️ Features
- **Real-time** temperature and humidity data acquisition
- **Serial communication** via Web Serial API
- **Minimalist UI** with a responsive design
- **Arduino integration** for sensor interfacing

---

## 🚀 System Workflow
1. **DHT11 Sensor** captures ambient temperature and humidity.
2. **Arduino** processes and transmits sensor data over the **serial interface**.
3. **JavaScript (Web Serial API)** reads and parses the incoming data stream.
4. The **dashboard** dynamically updates with the latest sensor readings.

---

## 🔧 Technical Requirements
### **Hardware**
- **Arduino Board** (Uno, Mega, or compatible model)
- **DHT11 Sensor**
- **USB Cable** (for Arduino-PC interface)
- **Jumper Wires**

### **Software**
- **Arduino IDE** (for firmware development)
- **Microsoft Edge** (Web Serial API required)
- **VS Code** (for web interface development)

---

## 📌 Deployment Guide
### **1️⃣ Upload the Arduino Firmware**
1. Load the provided **Arduino sketch** in **Arduino IDE**.
2. Configure the correct **Board & Port** in the **Tools** menu.
3. Compile and upload the firmware to the **Arduino**.

---

### **2️⃣ Launch the Web Dashboard**
1. Open the `index.html` file in a **Web Serial API-compatible browser**.
2. Click **"Connect"** and select the Arduino device.
3. The UI will display **live temperature & humidity data**.

---

## 📝 Code Overview
- The **Arduino code** initializes the DHT11 sensor, reads temperature & humidity, and sends the values over the serial port.
- The **Web Serial API (JavaScript)** establishes a connection to Arduino, reads the serial data, and updates the UI.
- **HTML & CSS** create a responsive dashboard for displaying the real-time sensor data.
- The **loop function** ensures continuous data reading and updates every 2 seconds.
- If the sensor fails to provide valid readings, the system outputs "NaN,NaN" as an error response.

---

## 📈 Future Enhancements
🔹 **Wireless Communication:** Implement ESP8266/ESP32 for remote monitoring.  
🔹 **Cloud Integration:** Store sensor data for historical analysis.  
🔹 **Enhanced UI:** Improve accessibility and mobile responsiveness.  
🔹 **Multi-Sensor Compatibility:** Support multiple environmental sensors.  
🔹 **Data Visualization:** Introduce real-time graphing and analytics.  

---

## 🌍 Application Scope
- **Smart Homes & IoT Automation**: Live environmental tracking.
- **Industrial & Agricultural Monitoring**: Real-time climate assessment.
- **Educational & Research Applications**: Web-hardware integration projects.

---
## 📜 License
This software and its associated code are **proprietary**. Unauthorized reproduction, modification, or distribution is strictly prohibited without prior written consent from the author.

---

