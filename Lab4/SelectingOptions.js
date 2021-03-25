import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./stylesSelect";
import Select from "./Select";
export default function SelectingOptions() {
 const [sizes, setSizes] = useState([
 { label: "", value: null },
 { label: "A", value: "A" },
 { label: "B", value: "B" },
 { label: "C", value: "C" }
 
 ]);
 const [garments, setGarments] = useState([
 { label: "", value: null, sizes: ["A", "B", "C"] },
 { label: "Fiat 500", value: 1, sizes: ["A"] },
 { label: "Ford Ka", value: 2, sizes: ["A"] },
 { label: "Skoda Citigo", value: 3, sizes: ["A"] },
 { label: "Citroen C3", value: 4, sizes: ["B"] },
 { label: "Peugeot 208", value: 5, sizes: ["B"] },
 { label: "Renault Clio", value: 6, sizes: ["B"] },
 { label: "Honda CR-V", value: 7, sizes: ["C"] },
 { label: "Toyota Auris", value: 8, sizes: ["C"] },
 { label: "Volkswagen Jetta", value: 9, sizes: ["C"] }
 
 ]);
 const [availableGarments, setAvailableGarments] = useState([]);
 const [selectedSize, setSelectedSize] = useState(null);
 const [selectedGarment, setSelectedGarment] = useState(null);
 const [selection, setSelection] = useState("");
 return (
 <View style={styles.container}>
 <Select
 label="Segment"
 items={sizes}
 selectedValue={selectedSize}
 onValueChange={size => {
 setSelectedSize(size);
 setSelectedGarment(null);
 setAvailableGarments(garments.filter(i =>
 i.sizes.includes(size)));
 }}
 />
 <Select
 label="Marka"
 items={availableGarments}
 selectedValue={selectedGarment}
 onValueChange={garment => {
 setSelectedGarment(garment);
 setSelection(
 `${selectedSize} ${garments.find(i => i.value ===
 garment).label}`
 );
 }}
 />
 <Text style={styles.selection}>{selection}</Text>
 </View>
 );
}