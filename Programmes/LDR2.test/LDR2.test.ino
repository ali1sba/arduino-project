const int lamp = 7;
boolean x = true;

void setup() {
  Serial.begin(9600);
  pinMode(lamp , OUTPUT);

}

void loop() {
  int c = analogRead(A0);
  delay(200);
if ( c<300 && x == true){
  digitalWrite(7,HIGH);
   x = false;
   delay(500);

}
else if ( c >300 && x == false){
x = true;
digitalWrite(7,LOW);
delay(500);
}
}
