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

function Income() {
    const [incomeAmount, setIncomeAmount] = useState("");
    const [incomeType, setIncomeType] = useState("");
    const toast = useToast();

    const handleSave = () => {
        // Cute toast popup confirming that data is saved
        toast({
            title: "Income saved",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box rounded="md" maxW="400px" p={4} borderWidth="1px" borderRadius="xl">
            <form>
            {/* === Income Type === */}
                <FormControl id="incomeType" mt="4">
                    <FormLabel>Income Type</FormLabel>
                    <Select
                        placeholder="Select Income Type"
                        value={incomeType}
                        onChange={(e) => setIncomeType(e.target.value)}
                    >
                        <option>Salary</option>
                        <option>Bonus</option>
                        <option>Petty Cash</option>
                        <option>Allowance</option>
                        <option>Others</option>
                    </Select>
                </FormControl>
            {/* === Income Amount === */}
                <FormControl id="income-amount" mt="4">
                    <FormLabel>Income Amount (GBP)</FormLabel>
                    <NumberInput
                        defaultValue={0}
                        precision={2}
                        min={0}
                        value={incomeAmount}
                        onChange={(value) => setIncomeAmount(value)}
                    >
                        <NumberInputField placeholder="Income Amount" />
                    </NumberInput>
                </FormControl>

            {/* === Save Button === */}
                <Button colorScheme="green" mt="4" onClick={handleSave}>
                    Save
                </Button>
            </form>
        </Box>
    );
}

export default Income;