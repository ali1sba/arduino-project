uint8_t ldrPin = A0;
int ldr_Val = 0;

void setup() {
  Serial.begin (115200);
  pinMode (ldrPin, INPUT);
  pinMode (LED_BUILTIN, OUTPUT);
}

void loop() {
  ldr_Val = analogRead (ldrPin);
  if (ldr_Val <= 500) {
    Serial.println ("INFERIEUR");
    digitalWrite (LED_BUILTIN, HIGH);
    delay (100);
    digitalWrite (LED_BUILTIN, LOW);
    delay(100);
  }
  else {
    Serial.println ("SUPERIEUR");
    digitalWrite (LED_BUILTIN, HIGH);
  }
}
