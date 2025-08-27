import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";
import { Typography } from "./Typography";

export interface Field {
    label: string;
    type: string;
    key: string;
    placeholder?: string;
    options?: { label: string; value: string }[];
    extras?: any;
}

interface CustomFormProps {
    title: string;
    fields: Field[];
    onSubmit?: (formData: any) => void;
}

export function CustomForm({ title, fields, onSubmit }: CustomFormProps) {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [selectedIndex, setSelectedIndex] = useState<Record<string, number>>({});
    const [showSelect, setShowSelect] = useState<Record<string, boolean>>({});

    const handleInputChange = (key: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSelectChange = (key: string, index: number) => {
        setSelectedIndex(prev => ({
            ...prev,
            [key]: index
        }));
        
        const field = fields.find(f => f.key === key);
        if (field?.options && field.options[index]) {
            setFormData(prev => ({
                ...prev,
                [key]: field.options![index].value
            }));
        }
        setShowSelect(prev => ({
            ...prev,
            [key]: false
        }));
    };

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    const renderField = (field: Field) => {
        switch (field.type) {
            case "text":
                return (
                    <TextInput
                        placeholder={field.placeholder || field.label}
                        value={formData[field.key] || ""}
                        onChangeText={(value) => handleInputChange(field.key, value)}
                        style={styles.input}
                    />
                );
            
            case "select":
                const fieldOptions = field.options || [];
                const selectedOption = fieldOptions[selectedIndex[field.key]];
                
                return (
                    <View style={styles.selectContainer}>
                        <TouchableOpacity
                            style={styles.selectButton}
                            onPress={() => setShowSelect(prev => ({
                                ...prev,
                                [field.key]: !prev[field.key]
                            }))}
                        >
                            <Text style={styles.selectButtonText}>
                                {selectedOption ? selectedOption.label : field.placeholder || `Select ${field.label}`}
                            </Text>
                        </TouchableOpacity>
                        
                        {showSelect[field.key] && (
                            <View style={styles.optionsContainer}>
                                {fieldOptions.map((option, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.optionItem}
                                        onPress={() => handleSelectChange(field.key, index)}
                                    >
                                        <Text style={styles.optionText}>{option.label}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                );
            
            case "date":
                React.useEffect(() => {
                    if (!formData[field.key]) {
                        const today = new Date();
                        handleInputChange(field.key, today.toISOString().split('T')[0]);
                    }
                }, []);
                
                return (
                    <TouchableOpacity
                        style={styles.dateButton}
                        onPress={() => {
                            const today = new Date();
                            handleInputChange(field.key, today.toISOString().split('T')[0]);
                        }}
                    >
                        <Text style={styles.dateButtonText}>
                            {formData[field.key] || field.placeholder || `${field.label}`}
                        </Text>
                    </TouchableOpacity>
                );
            
            default:
                return (
                    <TextInput
                        placeholder={field.placeholder || field.label}
                        value={formData[field.key] || ""}
                        onChangeText={(value) => handleInputChange(field.key, value)}
                        style={styles.input}
                    />
                );
        }
    };

    return (
        <View style={styles.container}>
            <Typography variant="h3">{title}</Typography>
            <View style={styles.fieldsContainer}>
                {fields.map((field) => (
                    <View key={field.key} style={styles.fieldRow}>
                        <View style={styles.labelContainer}>
                            <Typography variant="body">{field.label}</Typography>
                        </View>
                        <View style={styles.inputContainer}>
                            {renderField(field)}
                        </View>
                    </View>
                ))}
            </View>
            <CustomButton text="Submit" onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        padding: 20,
        paddingBottom: 100, // Add bottom padding to avoid menu overlap
        justifyContent: "space-around",
        width: "100%"
    },
    fieldsContainer: {
        flex: 1,
        gap: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%"
    },
    fieldRow: {
        flexDirection: "row",
        width: "100%",
        gap: 10,
        alignItems: "center"
    },
    labelContainer: {
        flex: 1
    },
    inputContainer: {
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        width: "100%"
    },
    selectContainer: {
        width: "100%",
        position: "relative"
    },
    selectButton: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "white"
    },
    selectButtonText: {
        color: "#333"
    },
        optionsContainer: {
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        zIndex: 1000,
        maxHeight: 200
    },
    optionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    optionText: {
        color: "#333"
    },
    dateButton: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "white"
    },
    dateButtonText: {
        color: "#333"
    }
});