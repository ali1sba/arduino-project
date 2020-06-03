/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
//  PS : La température est prise du DHT11 et non pas du BMP180 (moins de précision pour le DHT11) //
//  à la fin de la réalisation du projet switch temp form DHT11 to BMP180                          //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////


//Begin Librairies
//#include <DHTesp.h>
//#include <SFE_BMP180.h>
#include <DHT.h>
//End Librairies

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Begin Declarations
//capteur de pluie
int capteur=A0;
int sortie=13;
int detection;
int cde_led;

//LDR
int photocellPin = 2;     // La photo-résistance et la résistance 10K connectées sur la pin/broche analogique A2
int photocellReading;     // Contient la lecture analogique sur le pont diviseur Photo-résistance + R 10 KOhms

 
//DHT
DHT dht(A1,DHT11);
float t=0.0;
float h=0.0;
float w=0.0;
String temp;
String hum;
String water;
String readDHTTemperature() {
  t = dht.readTemperature();
  if (isnan(t)) {    
    Serial.println("Failed to read from DHT sensor!");
    Serial.println(String(t));
    return "--";
  }
  else {
    Serial.print(t);
    return String(t);
  }
}
String readDHTHumidity() {
  float h = dht.readHumidity();
  if (isnan(h)) {
    Serial.println("Failed to read from DHT sensor!");
    Serial.println(String(h));
    return "--";
  }
  else {
    Serial.print(h);
    return String(h);
  }
}



void setup() {
// Begin setup DHT

  Serial.begin(9600); // Initialise la communication avec le PC
  dht.begin();
// End setup DHT

//begin setup LDR
 {
  Serial.begin(9600);
 

}
//End 

// begin setup capteur de pluie
pinMode(sortie,OUTPUT); // broche "sortie" (13) en SORTIE led L
  pinMode(capteur,INPUT); // broche "capteur" (A0) en ENTREE
  // initialisation de la liaison sÃ©rie Ã  9600 bits/seconde 
  Serial.begin(9600);
  while (!Serial) { 
  } // ne rien faire tant que la liaison sÃ©rie n'est pas Ã©tablie (carte LEONARDO)
// fin setup capteur de pluie 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

void loop() {

 // loop du DHT11 
  Serial.print("Current humidity = ");
  hum=readDHTHumidity();
  Serial.print(" %  \n");
 
  Serial.print("temperature = ");
  temp=readDHTTemperature();  
  Serial.println(" C  ");

  delay(5000);
  //fin DHT11

  //debut loop du LDR
 // Mesure la tension sur la broche A2

  photocellReading = analogRead(photocellPin);  
 
  Serial.print("Lecture Analogique = ");
  Serial.print(photocellReading);     // La valeur analogique brute
 
  // Utilisons quelques seuils, détermination qualitative
  if (photocellReading < 10) {
    Serial.println(" - Noir");   // Dark en anglais
  } else if (photocellReading < 200) {
    Serial.println(" - Sombre"); // Dim en anglais (aussi traduit par Obscur)
  } else if (photocellReading < 500) {
    Serial.println(" - Léger");  // Light en anglais
  } else if (photocellReading < 800) {
    Serial.println(" - Lumineux"); // Bright en anglais
  } else {
    Serial.println(" - Très lumineux");  // Very bright en anglais
  }
  delay(1000);
//fin program LDR

  //debut loop du capteur de pluie 
  detection=analogRead(capteur); // on lit la broche capteur "analogique"
  Serial.print("valeur capteur de pluie : ");
  Serial.println(detection); // afficher la valeur de detection sur la liison sÃ©rie
  cde_led=detection/4; //  detection 10 bit (max 1023) -> cde_led 8 bit (max 255)
  analogWrite(sortie,cde_led); // on allume plus ou moins la LED L suivant cde_led
  delay(1000); // attendre 1s avant de refaire la mesure
  //fin capteur de pluie
  }
