function TurnDegrees () {
    music.playTone(698, music.beat(BeatFraction.Half))
    motors.largeAD.reset()
    TurnDegrees_GyroStartingAngle = sensors.gyro1.angle()
    if (TurnDegrees_Degrees > 0) {
        music.playTone(1976, music.beat(BeatFraction.Half))
        while (sensors.gyro1.angle() - TurnDegrees_GyroStartingAngle < TurnDegrees_Degrees) {
            motors.largeAD.tank(-20, 20)
        }
    } else if (TurnDegrees_Degrees < 0) {
        music.playTone(262, music.beat(BeatFraction.Half))
        while (sensors.gyro1.angle() - TurnDegrees_GyroStartingAngle > TurnDegrees_Degrees) {
            motors.largeAD.tank(20, -20)
        }
    }
    motors.largeA.stop()
    motors.largeD.stop()
}
let TurnDegrees_GyroStartingAngle = 0
let TurnDegrees_Degrees = 0
TurnDegrees_Degrees = -100
TurnDegrees()
