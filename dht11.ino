#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

#include <DHT.h>

#define DHTPIN 2        
#define DHTTYPE DHT11   

DHT dht(DHTPIN, DHTTYPE);

void setup() {
    Serial.begin(9600); 
    dht.begin();
}

void loop() {
    float temp = dht.readTemperature();  
    float hum = dht.readHumidity();      

    if (!isnan(temp) && !isnan(hum)) { 
        Serial.print(temp);   
        Serial.print(",");    
        Serial.println(hum);  
    } else {
        Serial.println("NaN,NaN"); 
    }

    delay(2000); 
}
