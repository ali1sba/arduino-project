

#define wspin A0
#define led 2

void setup() {
  Serial.begin(115200);
  pinMode(led,OUTPUT);
pinMode(wspin,INPUT);

}

void loop() {
  int wsvalue= analogRead(wspin);
 
 
 
  
if (wsvalue<=480){ 
    Serial.println("Water level: 0mm - Empty!"); 
  }
  else if (wsvalue>480 && wsvalue<=530){ 
    Serial.println("Water level: 0mm to 5mm"); 
  }
  else if (wsvalue>530 && wsvalue<=615){ 
    Serial.println("Water level: 5mm to 10mm"); 
  }
  else if (wsvalue>615 && wsvalue<=660){ 
    Serial.println("Water level: 10mm to 15mm"); 
  } 
  else if (wsvalue>660 && wsvalue<=680){ 
    Serial.println("Water level: 15mm to 20mm"); 
  }
  else if (wsvalue>680 && wsvalue<=690){ 
    Serial.println("Water level: 20mm to 25mm"); 
  }
  else if (wsvalue>690 && wsvalue<=700){ 
    Serial.println("Water level: 25mm to 30mm"); 
  }
  else if (wsvalue>700 && wsvalue<=705){ 
    Serial.println("Water level: 30mm to 35mm"); 
  }
  else if (wsvalue>705 && wsvalue<=710){ 
    Serial.println("Water level: 35mm to 40mm");
  } 
  else if (wsvalue> 710) {
  Serial.println ("Niveau d'eau: FULL");
  }
  
  delay(1000); 
}
