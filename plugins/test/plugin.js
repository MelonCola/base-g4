class JasonMode extends G4.Mode {
    constructor() {
        super("Jason") // name
    }

    getRings(
        levelIndex // the number of the generated level
    ) {
        return [
            new G4.Ring(
                [
                    new G4.RingBall(0, 200, 30),
                    new G4.RingBall(0.2, 200, 30),
                    new G4.RingBall(0.4, 200, 30),
                    new G4.RingBall(0.6, 200, 30),
                    new G4.RingBall(0.8, 200, 30)
                ],
                1, false
            ),
            new G4.Ring(
                [
                    new G4.RingBall(0.033, 300, 30),
                    new G4.RingBall(0.233, 300, 30),
                    new G4.RingBall(0.433, 300, 30),
                    new G4.RingBall(0.633, 300, 30),
                    new G4.RingBall(0.833, 300, 30)
                ],
                1, false
            ),
            new G4.Ring(
                [
                    new G4.RingBall(0.066, 400, 30),
                    new G4.RingBall(0.266, 400, 30),
                    new G4.RingBall(0.466, 400, 30),
                    new G4.RingBall(0.666, 400, 30),
                    new G4.RingBall(0.866, 400, 30)
                ],
                1, false
            )
        ]
    }

    moveElement(
        element,
        dTime, dRawTime, absoluteTime
    ) {
        if (element instanceof G4.RingBall) {
            element.angle = element.defaults.angle + Math.sin(absoluteTime * 1.5 + element.defaults.angle * 2 * Math.PI) * 0.3
            element.distance = element.defaults.distance + Math.sin(absoluteTime * 3 + element.defaults.angle * 2 * Math.PI) * 50
            element.radius = (Math.sin(absoluteTime * 3 + element.defaults.angle * 2 * Math.PI) / 2 + 0.5) * 50 + 20
        }
    }

    getThemeColors() {
        return {
            background: "#372F33",
            damage: "#382C2D",

            foreground: "#B56191",
            obstacle1: "#B56191",
            obstacle2: "#FFA96B",

            cannon: "#ECD037",
            bullet: "#FFFFFF"
        }
    }
}

// Register the new modes!
plugin.registerMode(new JasonMode())