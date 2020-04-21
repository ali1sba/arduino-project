int led=11;
void setup() {
  Serial.begin(9600);
}

void loop() {
  int capteurpluie = analogRead(A0);
  Serial.println(capteurpluie);
  if (capteurpluie==1023)
  {Serial.println("ensoleillé");}
   if ((capteurpluie<=1022) && (capteurpluie>=900))
  {Serial.println("pluie légère");}
  if ((capteurpluie<=900) &&( capteurpluie>=400))
    {Serial.println("pluie moyenne");}
  if ((capteurpluie<=400) && (capteurpluie>=0))
   {Serial.println("fortes pluies");}
}
