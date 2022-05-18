class Circle {
    constructor(centerX, centerY, radius, color) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.color = color;
    }

    static randomColor() {
        const HEX_DIGITS = "0123456789ABCDEF";

        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += HEX_DIGITS[Math.floor(Math.random() * HEX_DIGITS.length)];
        }

        return color;
    }

    static randomCircle(maxY, maxX, numCircles) {
        return new Circle(
            maxX * Math.random(),
            maxY * Math.random(),
            Circle.radius(maxX, maxY, numCircles),
            Circle.randomColor()
        );
    }

    static radius(maxX, maxY, numCircles) {
        let targetCircleArea = (maxX * maxY) / numCircles;
        let targetRadius = Math.sqrt(targetCircleArea / Math.PI);
        return 2 * targetRadius;
    }

    moveRandom(maxX, maxY) {
        let dx = (Math.random() * 2) - 1;
        let dy = (Math.random() * 2) - 1;

        this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);
        this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        ctx.arc(
            this.centerX,
            this.centerY,
            this.radius,
            0,
            2 * Math.PI,
            false
        );

        ctx.fill();
    }
}

module.exports = Circle;