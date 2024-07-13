import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, useColorScheme, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function FAQScreen({ navigation }) {
    const theme = useColorScheme() ?? 'light';
    const backgroundColor = theme === 'light' ? "#fff" : "#000";
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EBF1DE" }}>
            <View style={{ width: "100%", height: 22, position: "absolute", top: 0, backgroundColor: backgroundColor }}>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <View>
                    <Ionicons name="arrow-back" size={26} color="#294B29" />
                </View>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.content}>
                    <ThemedView style={styles.titleContainer}>
                        <ThemedText type="title">FAQs</ThemedText>
                    </ThemedView>
                    <Collapsible title="PPU là gì?">
                        <ThemedText>
                            PPU (Pure Pick Up) là không gian xanh trực tuyến dành cho cộng đồng những người dùng có mối quan tâm đến việc giữ môi trường sống xanh.
                        </ThemedText>
                    </Collapsible>
                    <Collapsible title="PPU có dịch vụ gì?">
                        <ThemedText>
                            PPU cung cấp 1 số dịch vụ về cộng đồng chủ yếu ở các nền tảng MXH như Facebook, Instagram,... nhằm giúp người dùng kết nối hơn với các sản phẩm mà PPU cung cấp, hướng người dùng đến các giá trị cốt lõi và đúng đắn của việc “Sống xanh”.
                        </ThemedText>
                    </Collapsible>
                    <Collapsible title="Tại sao phải phân loại rác?">
                        <ThemedText>
                            Bài báo “Taiwan's waste” đã đưa ra kết quả tích cực cho con số trăm triệu USD bởi việc xử lý và phân loại nghiêm ngặt hơn 60% lượng phát thải của cả nước.
                            Việc không phân loại rác sẽ dẫn đến nhiều hậu quả nghiêm trọng...
                        </ThemedText>
                        <ExternalLink href="https://iseul-debug.github.io/service.html">
                            <ThemedText type="link">Đọc thêm</ThemedText>
                        </ExternalLink>
                    </Collapsible>
                    <Collapsible title="Rác có mấy loại?">
                        <ThemedText>
                            Việc nhận biết và phân loại đúng rác thải không chỉ giúp tiết kiệm tài nguyên, năng lượng mà còn góp
                            phần bảo vệ môi trường và nâng cao chất lượng cuộc sống của chúng ta...
                        </ThemedText>
                        <ExternalLink href="https://iseul-debug.github.io/service.html">
                            <ThemedText type="link">Đọc thêm</ThemedText>
                        </ExternalLink>
                    </Collapsible>
                    <Collapsible title="Các bạn đã mệt chưa?">
                        <ThemedText>
                        </ThemedText>
                    </Collapsible>
                    <Collapsible title="Tụi tui thì có!">
                        <ThemedText>
                        </ThemedText>
                    </Collapsible>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 30,
        left: 5,
        zIndex: 10000,
        width: 35,
        height: 30,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 100,
    },
    content: {
        paddingHorizontal: 10,
    },
    titleContainer: {
        marginBottom: 20,
    },
});
