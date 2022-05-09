let username = prompt("Ai ở ngoài cửa đó, Mẹ hay Sói?")
if (username === "Mẹ") {
    let pass = prompt("Mẹ đi mua gì thế, Kem hay Kẹo?")
    if (pass === "Kem") {
        alert("Hoan hô mẹ đã về!");
    } else if (pass === "Kẹo") {
        alert("Điên à sói? Thấy lợn ăn kẹo bao giờ chưa?")
    } else if (pass == null) {
        alert("Nghĩ lâu quá vậy? Chắc là sói rồi!")
    } else {
        alert("Thôi phắn đi sói à, trả lời linh tinh vừa thôi!")
    }
} else if (username === "Sói") {
    alert ("Thật thà vậy ku? Thôi đi đi!")
} else {
    alert ("Nghe lạ vậy? Không mở cửa đâu nhé!")
}
