#include <Arduino.h>

const int buttonPin = 4;
const int ledPin = 13;
int lastButtonState = HIGH; // the previous state of button

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(buttonPin);
  if (buttonState == LOW && lastButtonState == HIGH) {
    // Send "RUN_TESTS" to the serial monitor when the button is pressed
    Serial.println("RUN_TESTS");
    delay(50);
  }
  lastButtonState = buttonState; // Update last button state
  delay(10);
}