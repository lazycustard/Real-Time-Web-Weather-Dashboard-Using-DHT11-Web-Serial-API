document.addEventListener("DOMContentLoaded", function () {
    let port;
    let connectButton = document.getElementById("connectButton");

    if (connectButton) {
        connectButton.addEventListener("click", async () => {
            try {
                port = await navigator.serial.requestPort(); 
                await port.open({ baudRate: 9600 });

                console.log("Connected to Arduino!");
                readSerialData();
            } catch (error) {
                console.error("Error:", error);
            }
        });
    } else {
        console.error("Button not found!");
    }

    async function readSerialData() {
        if (!port) {
            console.error("No serial port connected.");
            return;
        }

        const decoder = new TextDecoderStream();
        const inputStream = port.readable.pipeThrough(decoder);
        const reader = inputStream.getReader();

        let buffer = ""; 

        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                
                buffer += value; 
                let lines = buffer.split("\n");

                if (lines.length > 1) {
                    let lastLine = lines[lines.length - 2]; 
                    buffer = lines[lines.length - 1];

                    let [temp, hum] = lastLine.trim().split(",");

                    if (temp && hum) {
                        document.getElementById("temperature").textContent = `Temperature: ${temp}°C`;
                        document.getElementById("humidity").textContent = `Humidity: ${hum}%`;
                        console.log(`Updated -> Temp: ${temp}, Hum: ${hum}`);
                    }
                }
            }
        } catch (error) {
            console.error("Read error:", error);
        } finally {
            reader.releaseLock();
        }
    }
});
