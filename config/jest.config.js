module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["!src/**/*.interface.ts", "src/**/*.ts"],
    coveragePathIgnorePatterns: ["/node_modules/", "dist"],
    coverageReporters: ["json", "json-summary", "lcov", "html"],
    moduleFileExtensions: ["ts", "js", "json"],
    preset: "ts-jest",
    rootDir: "../src",
    testEnvironment: "node",
    verbose: true
};
