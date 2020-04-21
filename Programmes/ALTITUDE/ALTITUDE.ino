#include <Wire.h>
#include <SFE_BMP180.h>

SFE_BMP180 bmp180;
float Po = 1013.0;

void setup() {
  Serial.begin(115200);
  bool success = bmp180.begin();

  if (success) {
    Serial.println("BMP180 init success");
  }
}

void loop() {
  char status;
  double T, P, alt;
  bool success = false;

  status = bmp180.startTemperature();

  if (status != 0) {
    delay(1000);
    status = bmp180.getTemperature(T);

    if (status != 0) {
      status = bmp180.startPressure(3);

      if (status != 0) {
        delay(status);
        status = bmp180.getPressure(P, T);

        if (status != 0) {
          alt = bmp180.altitude(P, Po);

          Serial.print("Altitude: ");
          Serial.print(alt);
          Serial.println(" Meters");
        }
      }
    }
  }
}
