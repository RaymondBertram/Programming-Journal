class Strategy {
    execute(a, b) {
        throw new Error("This method should be overridden!");
    }
}

class ConcreteStrategyAdd extends Strategy {
    execute(a, b) {
        return a + b;
    }
}

class ConcreteStrategySubtract extends Strategy {
    execute(a, b) {
        return a - b;
    }
}

class ConcreteStrategyMultiply extends Strategy {
    execute(a, b) {
        return a * b;
    }
}

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}

class ExampleApplication {
    static main() {
        const context = new Context();

        const firstNumber = 10;
        const secondNumber = 2;
        const action = "subtraction"; // or "subtraction" or "multiplication"

        if (action === "addition") {
            context.setStrategy(new ConcreteStrategyAdd());
        } else if (action === "subtraction") {
            context.setStrategy(new ConcreteStrategySubtract());
        } else if (action === "multiplication") {
            context.setStrategy(new ConcreteStrategyMultiply());
        } else {
            console.error("Invalid action");
            return;
        }

        const result = context.executeStrategy(firstNumber, secondNumber);
        console.log(`The result is: ${result}`);
    }
}

// Run the application
ExampleApplication.main();