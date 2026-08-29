// Khai báo 2 mảng chứa các sản phẩm
var man = [
    {
        id: 1,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://dongphuchaianh.vn/wp-content/uploads/2022/04/ao-polo-nam-da-nang.jpg"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng QQ",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://dugarcocollection.com.vn/media/40067/catalog/800x1200%20(5).jpg"
    },
    {
        id: 3,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://5sfashion.vn/storage/product/vHPdxtYhzFZ2Muc2nG8vxUE9fhfh5RFb.webp"
    },
    {
        id: 4,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://4menshop.com/images/thumbs/2020/12/ao-polo-tron-basic-po016-mau-xam-15752.jpg"
    }
];

var woment = [
    {
        id: 1,
        name: "Quần jean nữ - KQ0002",
        code: "TC1025011BA",
        price: "269.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49JBGZNt8LiM__XxjvoFAWI9P96obCF7V6trQyTeDKJg_JtUF1zCjmCM&s=10"
    },
    {
        id: 2,
        name: "Áo khoác nữ - VN0002",
        code: "TC1025011BA",
        price: "249.000",
        image: "https://kesattrangtridanang.com/wp-content/uploads/2023/06/lo-lem-shop.jpg"
    },
    {
        id: 3,
        name: "Áo phông nữ - US0002",
        code: "TC1025011BA",
        price: "159.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1wdB57XQugjVAmVFK4vW1jvzAGQcBaW0l9UPU9QdysTDylHSg6MOG5EU&s=10"
    },
    {
        id: 4,
        name: "Áo thun nữ cao cấp",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseS3-3-kgozWQ7VvilxQnqL5-gWMnCeCdnlytLCk09qi9iVn-_K13eYg&s=10"
    }
];

// Hàm render sản phẩm vào DOM
function listProducts() {
    // Vòng lặp cho mảng Nam
    for (let i = 0; i <= man.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + man[i].image + '" class="card-img-top" style="height:400px;" alt="' + man[i].name + '" onerror="handleImageError(this, \'' + escapeJs(man[i].name) + '\')">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + man[i].name + '</h5>';
        demo += '<p class="card-text">' + man[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }

    // Vòng lặp cho mảng Nữ (woment)
    for (let i = 0; i <= woment.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + woment[i].image + '" class="card-img-top" style="height:400px;" alt="' + woment[i].name + '" onerror="handleImageError(this, \'' + escapeJs(woment[i].name) + '\')">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
        demo += '<p class="card-text">' + woment[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}

function oder() {
    alert("thank you your order ");
}

// Called from img onerror to replace broken image with generated placeholder
function handleImageError(imgEl, name) {
    try {
        imgEl.onerror = null;
        imgEl.src = generateImageDataURL(name || 'Product', 400, 500);
    } catch (e) {
        // fallback to a neutral placeholder
        imgEl.src = 'https://via.placeholder.com/400x500?text=No+Image';
    }
}

// Escape JS string for inline attribute
function escapeJs(str) {
    if (!str) return '';
    return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\"/g, '\\"');
}

// Trả về ảnh để dùng cho sản phẩm: nếu sản phẩm có ảnh hợp lệ thì dùng, ngược lại tạo ảnh dựa trên tên
function getImageForProduct(product) {
    if (product && product.image && product.image.toString().trim()) {
        // Nếu là placeholder theo định dạng via.placeholder, coi như không có ảnh thực
        if (product.image.indexOf('placeholder.com') === -1) return product.image;
    }
    return generateImageDataURL(product.name || 'Product', 400, 500);
}

// Tạo data URL ảnh PNG dùng Canvas, vẽ tên sản phẩm lên nền màu tạo từ hash tên
function generateImageDataURL(text, width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width || 400;
    canvas.height = height || 500;
    var ctx = canvas.getContext('2d');

    var bg = nameToHsl(text || 'p');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text color: dark or light depending on bg lightness
    ctx.fillStyle = '#222';
    ctx.textAlign = 'center';

    // Wrap text into lines
    var maxWidth = canvas.width - 40;
    var words = (text || '').split(' ');
    var lines = [];
    var line = '';
    ctx.font = 'bold 22px Arial';
    for (var i = 0; i < words.length; i++) {
        var testLine = line ? line + ' ' + words[i] : words[i];
        var metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line) {
            lines.push(line);
            line = words[i];
        } else {
            line = testLine;
        }
    }
    if (line) lines.push(line);

    // Draw lines centered vertically
    var lineHeight = 28;
    var textY = (canvas.height - (lines.length * lineHeight)) / 2 + 18;
    for (var j = 0; j < lines.length; j++) {
        ctx.fillText(lines[j], canvas.width / 2, textY + j * lineHeight);
    }

    return canvas.toDataURL('image/png');
}

// Sinh màu HSL từ tên để có nền khác nhau
function nameToHsl(name) {
    var hash = 0; for (var i = 0; i < name.length; i++) { hash = name.charCodeAt(i) + ((hash << 5) - hash); }
    var h = Math.abs(hash) % 360;
    return 'hsl(' + h + ', 60%, 80%)';
}