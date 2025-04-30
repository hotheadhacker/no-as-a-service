const fs = require('fs');

class NoService {
    constructor(customReasons = null) {
        this.reasons = customReasons || this.loadReasons();
    }

    loadReasons() {
        try {
            return require('./reasons.json');
        } catch (error) {
            return JSON.parse(fs.readFileSync('./reasons.json', 'utf-8'));
        }
    }

    getRandomReason() {
        return this.reasons[Math.floor(Math.random() * this.reasons.length)];
    }

    getAllReasons() {
        return [...this.reasons];
    }

    addReason(reason) {
        if (typeof reason === 'string' && reason.trim()) {
            this.reasons.push(reason.trim());
        }
    }
}

// Create default instance
const defaultService = new NoService();

module.exports = {
    NoService,
    getRandomReason: () => defaultService.getRandomReason(),
    getAllReasons: () => defaultService.getAllReasons(),
    loadReasons: () => defaultService.loadReasons()
};