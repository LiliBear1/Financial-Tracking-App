import { useState } from "react";
import {
    FormControl,
    FormLabel,
    Button,
    useToast,
    NumberInput,
    NumberInputField,
    Select,
    Box,
} from "@chakra-ui/react";

function Expenses() {
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseType, setExpenseType] = useState("");
    const toast = useToast();

    const handleSave = () => {
        // Cute toast popup confirming that data is saved
        toast({
            title: "Expense saved",
            status: "error",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box rounded="md" w="50%" m={2} p={4} boxShadow='lg' borderWidth="1px" borderRadius="xl" borderColor="red.500" color='red.500'>
            <form>
                {/* === Expense Type === */}
                <FormControl id="expenseType" mt="4">
                    <FormLabel>Expense Type</FormLabel>
                    <Select
                        placeholder="Select Expense Type"
                        value={expenseType}
                        onChange={(e) => setExpenseType(e.target.value)}
                    >
                        <option>Food</option>
                        <option>Transportation</option>
                        <option>Groceries</option>
                        <option>Utilities</option>
                        <option>Health</option>
                        <option>Fun</option>
                        <option>Shopping</option>
                        <option>Gifts</option>
                        <option>Others</option>
                    </Select>
                </FormControl>

                {/* === Expense Amount === */}
                <FormControl id="expense-amount" mt="4">
                    <FormLabel>Expense Amount (GBP)</FormLabel>
                    <NumberInput
                        defaultValue={0}
                        precision={2}
                        min={0}
                        value={expenseAmount}
                        onChange={(value) => setExpenseAmount(value)}
                    >
                        <NumberInputField placeholder="Expense Amount" />
                    </NumberInput>
                </FormControl>

                {/* === Save Button === */}
                <Button colorScheme="red" mt="4" onClick={handleSave}>
                    Save
                </Button>
            </form>
        </Box>
    );
}

export default Expenses;
