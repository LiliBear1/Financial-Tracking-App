import { useState } from "react";
import {
    FormControl, FormLabel,
    Button,
    useToast,
    NumberInput, NumberInputField,
    Select,
    Box,
} from "@chakra-ui/react";

function Income() {
    const [incomeAmount, setIncomeAmount] = useState("");
    const [incomeType, setIncomeType] = useState("");
    const toast = useToast();

    const handleSave = () => {
        if (incomeAmount === "") {
            toast({
                title: "Income amount cannot be blank",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        // Save income data to local storage
        const incomes = JSON.parse(localStorage.getItem("incomes")) || [];
        incomes.push({ incomeType, incomeAmount });
        localStorage.setItem("incomes", JSON.stringify(incomes));  

        // Cute toast popup confirming that data is saved
        toast({
            title: "Income saved",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        // Reset input fields
        setIncomeAmount("");
        setIncomeType("");
    };

    return (
        <Box rounded="md" w="50%" m={2} p={4} boxShadow='lg' borderWidth="1px" borderRadius="xl" borderColor="green.500" color='green.500'>

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
                        <NumberInputField
                            placeholder="Income Amount"
                            onKeyPress={(e) => {
                                // Allow only numbers and decimal points
                                const pattern = /[0-9.]/;
                                const inputChar = String.fromCharCode(e.charCode);
                                if (!pattern.test(inputChar)) {
                                    e.preventDefault();
                                }
                            }}
                        />
                    </NumberInput>
                </FormControl>

                {/* === Save Button === */}
                <Button colorScheme="green" mt="4" onClick={handleSave} w='100%'>
                    Save
                </Button>
            </form>
        </Box>
    );
}

export default Income;