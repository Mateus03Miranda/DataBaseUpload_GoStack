import * as CreateTransactionService from "./CreateTransactionService"
// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new CreateTransactionService.default()
    })

    test("0", async () => {
        await inst.execute({ title: "International Intranet Coordinator", value: 10, type: "outcome", category: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles" })
    })

    test("1", async () => {
        await inst.execute({ title: "Internal Interactions Strategist", value: 256, type: "outcome", category: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design" })
    })

    test("2", async () => {
        await inst.execute({ title: "Dynamic Quality Specialist", value: 0, type: "outcome", category: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design" })
    })

    test("3", async () => {
        await inst.execute({ title: "International Intranet Coordinator", value: 64, type: "outcome", category: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design" })
    })

    test("4", async () => {
        await inst.execute({ title: "International Intranet Coordinator", value: 256, type: "outcome", category: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality" })
    })

    test("5", async () => {
        await inst.execute({ title: "", value: -Infinity, type: "income", category: "" })
    })
})
