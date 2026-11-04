export class PerlinNoise {
    constructor() {
        /** @type {Uint16Array} */
        const permutation = new Uint16Array(256);
        for (let i = 0; i < 256; i++) {
            permutation[i] = i;
        }
        /** @type {Uint16Array} */
        this.p = new Uint16Array(512);
        for (let i = 0; i < 512; i++) {
            this.p[i] = permutation[i & 255];
        }
    }

    /**
     * @param {number} t
     * @returns {number}
     */
    fade(t) {
        return t * t * t * (t * t * (t * 6 - 15) + 10);
    }

    /**
     * @param {number} t
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    lerp(t, a, b) {
        return a + t * (b - a);
    }

    grad(hash, x, y, z) {
        //
    }

    noise(x, y = 0, z = 0) {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        const Z = Math.floor(z) & 255;

        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);

        const u = this.fade(x);
        const v = this.fade(y);
        const w = this.fade(z);

        const A = this.p[X] + Y;
        const AA = this.p[A] + Z;
        const AB = this.p[A + 1] + Z;

        const B = this.p[X + 1] + Y;
        const BA = this.p[B] + Z;
        const BB = this.p[B + 1] + Z;
    }
}
