
#include <NewPing.h>
 
#define TRIGGER_PIN 3
#define ECHO_PIN 2
#define MAX_DISTANCE 50
// the setup function runs once when you press reset or power the board

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); 
void setup() {
  Serial.begin(9600);
}

// the loop function runs over and over again forever
void loop() {
   delay(10);
   float distance =  (sonar.ping_median(2)/2) / 29.1;
   Serial.println(distance);
}
