// 多國語言系統 - 支援六種語言
const languages = {
    en: {
        nav: {
            home: "Home",
            about: "About Us", 
            capabilities: "Manufacturing",
            products: "Products",
            services: "Services",
            certification: "Certifications",
            quality: "Quality",
            contact: "Contact Us",
            selectLanguage: "Select Language",
            closeLanguage: "Close language menu",
            consultBtn: "Get Quote",
            craft: "Craft",
            testing: "Quality",
            workplace: "Workplace",
            whoWeServe: "Clients"
        },
        theme: {
            light: "Switch to light mode",
            dark: "Switch to dark mode"
        },
        hero: {
            title: "Your Trusted OEM/ODM Partner<br>for Furniture Manufacturing",
            subtitle: "Top Performance Vietnam combines 39+ years of expertise with Vietnam's tariff advantages. We serve US furniture brands, companies relocating from China, and global partners—delivering cost-effective, high-quality OEM/ODM solutions.",
            learnMore: "Learn More",
            contactUs: "Contact Us",
            stats: {
                experience: "Years of Expertise",
                employees: "Professional Staff", 
                factory: "Sq.m Factory",
                locations: "Production Sites"
            }
        },
        vietnamAdvantage: {
            title: "Vietnam Manufacturing Advantage",
            subtitle: "Strategic Benefits for Global Trade in {YEAR}",
            tariffTitle: "US Tariff Advantages",
            tariffContent: "Vietnam enjoys preferential tariff treatment with the US, avoiding additional tariffs imposed on many other countries, providing significant cost savings for your business.",
            costTitle: "Cost Competitiveness",
            costContent: "Reduce labor and operational costs while maintaining high quality standards, providing exceptional value for your investment.",
            supplyTitle: "Strong Supply Chain",
            supplyContent: "Comprehensive supply chain infrastructure and strategic location for efficient global distribution."
        },
        certifications: {
            title: "Quality & Safety Certifications",
            subtitle: "Comprehensive Standards Compliance for Global Markets",
            iso9001: {
                title: "ISO 9001",
                description: "Quality management system certification ensuring product quality consistency and customer satisfaction.",
                benefit1: "Quality Assurance",
                benefit2: "Customer Satisfaction"
            },
            iso14001: {
                title: "ISO 14001", 
                description: "Environmental management system certification demonstrating our commitment to environmental responsibility.",
                benefit1: "Environmental Protection",
                benefit2: "Sustainable Development"
            },
            cpsia: {
                title: "CPSIA Compliance",
                description: "Compliant with US Consumer Product Safety Improvement Act, ensuring children's product safety.",
                benefit1: "Child Safety",
                benefit2: "US Market"
            },
            astm: {
                title: "ASTM Standards",
                description: "Compliant with American Society for Testing and Materials product safety and quality standards.",
                benefit1: "Material Safety",
                benefit2: "International Recognition"
            },
            cpsc: {
                title: "CPSC Compliance",
                description: "Compliant with US Consumer Product Safety Commission requirements, ensuring products meet US safety standards.",
                benefit1: "Consumer Safety",
                benefit2: "Regulatory Compliance"
            }
        },
        environmental: {
            title: "Environmental Excellence",
            subtitle: "Sustainable Manufacturing for a Better Future",
            fsc: {
                title: "FSC Certification",
                description: "Forest Stewardship Council certification ensuring responsible wood sourcing and sustainable forest management practices.",
                benefit1: "Sustainable Forestry",
                benefit2: "Responsible Sourcing"
            },
            carb: {
                title: "CARB Compliance",
                description: "Compliant with California Air Resources Board wood product formaldehyde emission standards.",
                benefit1: "Low Formaldehyde Emissions",
                benefit2: "Air Quality Protection"
            },
            greenguard: {
                title: "GREENGUARD Certification",
                description: "Low chemical emission certification creating healthier indoor environments for homes.",
                benefit1: "Healthy Indoor Environment",
                benefit2: "Low Chemical Emissions"
            },
            benefits: {
                title: "Environmental Benefits",
                description: "Our environmental certifications ensure healthier products, reduced environmental impact, and compliance with global sustainability requirements."
            }
        },
        contact: {
            title: "Contact Us",
            subtitle: "Contact us for free quotes and professional consultation services.",
            cta: {
                title: "From Design to Mass Production, We Bring It to Life",
                lead: "Share your product requirements and our team will provide a tailored OEM/ODM proposal.",
                highlight1: "OEM & ODM One-Stop",
                highlight2: "39+ Years Manufacturing Heritage",
                highlight3: "Vietnam Production Advantage",
                emailButton: "Email growth@topperform.com",
                responseNote: "We typically respond within 1–2 business days.",
                socialLabel: "Follow us"
            },
            formTitle: "Online Quote Request",
            formSubtitle: "Share your project details and we will get back to you with a tailored proposal.",
            phone: {
                title: "Phone Contact",
                label: "Phone:"
            },
            mobile: {
                label: "Mobile:"
            },
            japan: {
                label: "Japan:"
            },
            china: {
                label: "China:"
            },
            online: {
                title: "Online Contact"
            },
            email: {
                label: "Email:"
            },
            website: {
                label: "Website:"
            },
            address: {
                title: "Company Address",
                full: "Area A-CN-2, Quynh Giao Industrial cluster, Quynh Giao commune, Quynh Phu district, Thai Binh province 413760, Vietnam"
            },
            form: {
                name: "Contact Name *",
                email: "Contact Email *",
                phone: "Phone",
                company: "Company Name",
                website: "Company Website",
                message: "Message *",
                submit: "Submit Inquiry"
            },
            formErrors: {
                required: "This field is required.",
                invalidEmail: "Please enter a valid email address.",
                whitespace: "This field cannot be blank or whitespace only."
            }
        },
        about: {
            title: "About Top Performance Vietnam",
            lead: "Heritage of expertise, rooted in Vietnam, serving the world.",
            subtitle: "Top Performance Vietnam, established in 2024, is a wholly-owned subsidiary of Tang Zhou Enterprise in Taiwan. With over 39 years of furniture manufacturing expertise from our parent company, we have invested millions in a 70,000 sq.m vertically integrated manufacturing base in Thai Binh Province, Vietnam.",
            partner: "We are more than a manufacturer—we are your strategic partner. By integrating Vietnam's supply chain advantages and tariff benefits, we deliver cost-effective, high-quality OEM/ODM services for global clients.",
                capabilities: {
                    title: "Comprehensive Capabilities",
                description: "Equipped with state-of-the-art facilities including metal processing workshops, fully automated painting production lines, CNC panel processing centers, and injection molding equipment."
                },
                quality: {
                    title: "Quality Assurance", 
                description: "Our in-house laboratory ensures compliance with global standards through rigorous testing protocols and comprehensive certification programs."
            },
            flexibility: {
                title: "Global Flexibility",
                description: "Leveraging Vietnam's strategic advantages and mature supply chain ecosystem to provide flexible customization services for global clients."
            }
        },
        products: {
            title: "Featured Products",
            subtitle: "Products cover office furniture, educational training furniture, children's furniture, indoor furniture and home furnishings.",
            loading: "Loading products...",
            noProducts: "Product zone is being built",
            noProductsDesc: "We are preparing the product display content carefully. Please wait for the high-quality products of Top Performance Vietnam.",
            introLine1: "Top Performance Vietnam is an expert in providing office furniture, educational training furniture, and home furnishings of high quality.",
            introLine2: "Our products cover office furniture, storage cabinets, children's furniture, and various series to meet the diverse needs of our clients.",
            viewDetails: "View Details",
            features: {
                multifunctional: "Multi-functional",
                flexibleDesign: "Flexible Design",
                safeEcoFriendly: "Safe & Eco-friendly",
                childSpecific: "Child-specific",
                minimalistDesign: "Minimalist Design",
                spaceOptimization: "Space Optimization",
                largeCapacity: "Large Capacity",
                officeSpecific: "Office-specific",
                flexibleApplication: "Flexible Application"
            },
            details: {
                photos: "Product Photos",
                description: "Product Description",
                specifications: "Product Specifications",
                width: "Width",
                depth: "Depth",
                height: "Height",
                weight: "Weight"
            },
            flipTable: {
                title: "Flip Table",
                description: "Flexible multi-functional flip table suitable for modern office and educational environments."
            },
            childWardrobe: {
                title: "Children's White Wood Grain Double Door Wardrobe Set",
                description: "Beautifully designed, practical, safe and eco-friendly children's wardrobe."
            },
            bookshelf: {
                title: "Cubic Natural Wood Open Bookshelf",
                description: "Modern minimalist design storage bookshelf that enhances space utilization."
            },
            fileCabinet: {
                title: "High White Gray Double Door Multi-functional File Cabinet",
                description: "Office-specific high-capacity file storage solution."
            },
            storageCabinet: {
                title: "Multi-functional Storage Cabinet",
                description: "Flexible storage solution suitable for various space requirements."
            }
        },
        expo: {
            title: "Meet Us at EDSpaces 2025",
            subtitle: "Greater Columbus Convention Center, USA",
            lead: "We will showcase our school and education furniture solutions.",
            details: {
                dateLabel: "Dates",
                dateValue: "November 5-7, 2025",
                locationLabel: "Venue",
                locationValue: "Greater Columbus Convention Center, Columbus, Ohio, USA",
                boothLabel: "Booth",
                boothValue: "1153"
            },
            cta: "We warmly welcome visitors and industry partners to visit our booth.",
            viewCatalog: "View Digital Catalog"
        },
        footer: {
            company: {
                name: "Top Performance Vietnam",
                description: "Professional furniture manufacturer providing OEM/ODM one-stop solutions, committed to becoming your preferred partner for global furniture procurement."
            },
            links: {
                title: "Quick Links",
                privacy: "Privacy Policy",
                terms: "",
                sitemap: ""
            },
            contact: {
                title: "Contact Information",
                phone: "Phone:",
                email: "Email:",
                address: "Address:",
                website: "Website:",
                location: "Area A-CN-2, Quynh Giao Industrial cluster, Quynh Giao commune, Quynh Phu district, Thai Binh province 413760, Vietnam"
            },
        services: {
                title: "Services",
                metalProcessing: "Metal Processing",
                injectionMolding: "Injection Molding",
                powderCoating: "Powder Coating",
                moldManufacturing: "Mold Manufacturing",
                woodProcessing: "Wood Processing",
                oneStopService: "One-Stop Service"
            },
            copyright: "© {YEAR} Top Performance Vietnam Co., Ltd. All rights reserved"
        },
        privacy: {
            content: "我們不進行任何跨站追蹤、行為分析或廣告再行銷，也不使用不必要的 Cookie。表單資料僅用於回覆您的詢問，不會分享給第三方。"
        },
        privacy: {
            content: "We do not conduct cross-site tracking, behavioral analysis, or remarketing. We also do not use unnecessary cookies. The information you submit via forms is used solely to respond to your inquiry and will not be shared with third parties."
        },
        notifications: {
            sending: "Sending...",
            success: "Your message has been sent. We will get back to you soon.",
            missingRequired: "Please complete the required fields.",
            failed: "Submission failed. Please try again later or contact us via email.",
            quotaExceeded: "Monthly submission limit reached. Please contact us via email.",
            captchaRequired: "Please complete the verification."
        },
        chat: {
            placeholder: "Type your message...",
            welcome: "Hello, I am Nancy. How may I assist with your furniture manufacturing needs today?"
        },
        capabilities: {
            title: "Comprehensive Manufacturing Capabilities", 
            subtitle: "Complete One-Stop Production Solutions",
            overview: "Manufacturing Services Overview",
            plastic: {
                title: "Advanced Plastic Processing",
                description: "State-of-the-art 3D printing, CNC machining, injection molding, and blow molding capabilities for precision plastic components.",
                features: {
                    feature1: "3D Printing",
                    feature2: "CNC Cutting", 
                    feature3: "Injection Molding",
                    feature4: "Blow Molding"
                }
            },
            metal: {
                title: "Professional Metal Processing", 
                description: "Complete metal fabrication facility equipped with professional CNC lathes, stamping, welding, and surface treatment capabilities.",
                features: {
                    feature1: "CNC Lathes",
                    feature2: "Metal Stamping",
                    feature3: "Professional Welding", 
                    feature4: "Surface Treatment"
                }
            },
            wood: {
                title: "Professional Wood Processing",
                description: "Comprehensive woodworking facility with advanced CNC panel processing and traditional craftsmanship expertise.",
                features: {
                    feature1: "CNC Panel",
                    feature2: "Precision Cutting",
                    feature3: "Traditional Craftsmanship", 
                    feature4: "Surface Finishing"
                }
            },
            service: {
                title: "One-Stop Service",
                description: "Complete end-to-end service from design sampling to mass production and shipping, eliminating communication barriers and reducing costs.",
                features: {
                    feature1: "Design & Sampling",
                    feature2: "Mass Production",
                    feature3: "Quality Inspection",
                    feature4: "Logistics & Shipping"
                }
            }
        },
        whoWeServe: {
            title: "Who We Serve",
            subtitle: "Your trusted OEM/ODM partner for furniture manufacturing",
            usBrands: "US Furniture Brands",
            usBrandsDesc: "Large furniture brands in the US market with nationwide retail presence—we deliver quality at scale.",
            relocation: "Production Relocation",
            relocationDesc: "Companies facing US tariffs or seeking supply chain diversification—we help you move production to Vietnam smoothly.",
            global: "Global Partners",
            globalDesc: "Vietnamese, Chinese, Japanese, Korean furniture makers—we welcome ODM projects and capacity partnerships.",
            startups: "Startups & Scale-ups",
            startupsDesc: "New brands or brands with limited capacity—our ODM design and OEM manufacturing get you to market faster."
        },
        craft: {
            title: "Craft & Technology",
            subtitle: "Full production chain from mold development to final assembly",
            mold: { title: "Mold Design & Manufacturing", desc: "Structured DFM and mold flow analysis with high-precision CNC, EDM, and wire cutting to achieve micrometer-level accuracy. Delivery in 30–60 days." },
            metalPipe: { title: "Metal Tube Processing", desc: "Advanced CNC cutting, 3D bending, stamping, and welding for round, square, and custom tubes. 14 stamping machines (25–110 tons) with integrated inspection." },
            sheetMetal: { title: "Sheet Metal Processing", desc: "High-precision laser cutting (±0.1 mm), 4/6-axis CNC bending, and multiple welding methods. Processes carbon steel, stainless steel, aluminum up to 20 mm." },
            panel: { title: "Panel Processing", desc: "Complete panel line: CNC cutting, edge banding (PUR), six-sided drilling, with MES/ERP integration. Supports particleboard, MDF, TFL, and plywood." },
            blowMolding: { title: "Blow Molding", desc: "Large-tonnage extrusion blow molding for oversized hollow parts. HDPE/PP materials, programmable wall thickness, producing full-size furniture surfaces in one piece." },
            injection: { title: "Injection Molding", desc: "120 to 1,250 ton machines with servo-hydraulic precision. Processes PP, ABS, Nylon, PC, and glass-fiber compounds. Mold life exceeds 500,000 shots." },
            powderCoating: { title: "Powder Coating", desc: "595-meter automated line with 21-step pre-treatment, Swiss robotic arms for uniform coating, powder recovery system, and 24/7 production capability." },
            assembly: { title: "Assembly & QC", desc: "Three semi-automatic assembly lines integrating metal, plastic, and panel components. SOP-guided workstations with in-line and final quality inspections." }
        },
        testing: {
            title: "Rigorous Testing",
            subtitle: "Quality commitment: International standards and advanced testing guard your product quality",
            lead: "We operate an independent in-house laboratory equipped with comprehensive testing from material analysis to product lifecycle testing, ensuring every step from raw materials to shipment meets the world's most stringent safety and quality standards."
        },
        workplace: {
            title: "Workplace-Friendly Environment",
            subtitle: "At Top Performance Vietnam, we view our team not just as employees, but as extended family.",
            lead: "We strive to create a relaxed, welcoming atmosphere where you can feel as comfortable and authentic as you do at home. We believe that peace of mind leads to great work.",
            compensation: "Competitive Compensation",
            compensationDesc: "Offering salaries and benefits that truly value your contribution.",
            workLife: "Work-Life Harmony",
            workLifeDesc: "Respecting your personal time with reasonable working hours.",
            ethics: "Ethical Standards",
            ethicsDesc: "Upholding strict international labor laws with zero tolerance for forced labor."
        },
        productTypes: {
            title: "Product Categories",
            subtitle: "Educational, commercial, and industrial solutions—OEM & ODM ready",
            educational: "Educational",
            educationalDesc: "Student desks, chairs, modular tables",
            commercial: "Commercial",
            commercialDesc: "Executive desks, height-adjustable desks, cabinets, metal shelving",
            industrial: "Industrial & Others",
            industrialDesc: "Blow-molded pallets, magnetic clips, plastic components, tools"
        }
    },
    vi: {
        nav: {
            home: "Trang chủ",
            about: "Về chúng tôi",
            capabilities: "Chế tạo",
            products: "Sản phẩm",
            services: "Dịch vụ",
            certification: "Chứng nhận",
            quality: "Chất lượng",
            contact: "Liên hệ",
            selectLanguage: "Chọn ngôn ngữ",
            closeLanguage: "Đóng menu ngôn ngữ",
            consultBtn: "Báo giá",
            craft: "Công nghệ",
            testing: "Chất lượng",
            workplace: "Môi trường",
            whoWeServe: "Khách hàng"
        },
        theme: {
            light: "Chuyển sang chế độ sáng",
            dark: "Chuyển sang chế độ tối"
        },
        hero: {
            title: "Dẫn đầu sản xuất nội thất<br>Xuất sắc từ Việt Nam",
            subtitle: "Top Performance Vietnam Co., Ltd. cung cấp các giải pháp OEM/ODM đẳng cấp thế giới với 39 năm kinh nghiệm, công nghệ tiên tiến và dịch vụ toàn diện cho khách hàng toàn cầu.",
            learnMore: "Tìm hiểu thêm",
            contactUs: "Liên hệ",
            stats: {
                experience: "Năm kinh nghiệm",
                employees: "Nhân viên chuyên nghiệp",
                factory: "M² nhà máy",
                locations: "Cơ sở sản xuất"
            }
        },
        vietnamAdvantage: {
            title: "Lợi thế sản xuất tại Việt Nam",
            subtitle: "Lợi ích chiến lược cho thương mại toàn cầu năm {YEAR}",
            tariffTitle: "Lợi thế thuế quan Mỹ",
            tariffContent: "Việt Nam được hưởng ưu đãi thuế quan với Mỹ, tránh được các mức thuế bổ sung áp đặt lên nhiều quốc gia khác.",
            costTitle: "Khả năng cạnh tranh về chi phí",
            costContent: "Giảm chi phí lao động và vận hành trong khi duy trì tiêu chuẩn chất lượng cao, mang lại giá trị đặc biệt cho khoản đầu tư của bạn.",
            supplyTitle: "Chuỗi cung ứng mạnh mẽ",
            supplyContent: "Cơ sở hạ tầng chuỗi cung ứng toàn diện và vị trí chiến lược để phân phối toàn cầu hiệu quả."
        },
        certifications: {
            title: "Chứng nhận chất lượng & an toàn",
            subtitle: "Tuân thủ tiêu chuẩn toàn diện cho thị trường toàn cầu",
            iso9001: {
                title: "ISO 9001",
                description: "Chứng nhận hệ thống quản lý chất lượng đảm bảo tính nhất quán về chất lượng sản phẩm và sự hài lòng của khách hàng.",
                benefit1: "Đảm bảo chất lượng",
                benefit2: "Sự hài lòng của khách hàng"
            },
            iso14001: {
                title: "ISO 14001",
                description: "Chứng nhận hệ thống quản lý môi trường thể hiện cam kết của chúng tôi về trách nhiệm môi trường.",
                benefit1: "Bảo vệ môi trường",
                benefit2: "Phát triển bền vững"
            },
            cpsia: {
                title: "Tuân thủ CPSIA",
                description: "Tuân thủ Đạo luật Cải thiện An toàn Sản phẩm Tiêu dùng của Mỹ, đảm bảo an toàn sản phẩm trẻ em.",
                benefit1: "An toàn trẻ em",
                benefit2: "Thị trường Mỹ"
            },
            astm: {
                title: "Tiêu chuẩn ASTM",
                description: "Tuân thủ các tiêu chuẩn an toàn và chất lượng sản phẩm của Hiệp hội Thử nghiệm và Vật liệu Mỹ.",
                benefit1: "An toàn vật liệu",
                benefit2: "Công nhận quốc tế"
            },
            cpsc: {
                title: "Tuân thủ CPSC",
                description: "Tuân thủ các yêu cầu của Ủy ban An toàn Sản phẩm Tiêu dùng Mỹ, đảm bảo sản phẩm đáp ứng tiêu chuẩn an toàn Mỹ.",
                benefit1: "An toàn người tiêu dùng",
                benefit2: "Tuân thủ quy định"
            }
        },
        environmental: {
            title: "Xuất sắc về môi trường",
            subtitle: "Sản xuất bền vững cho một tương lai tốt đẹp hơn",
            fsc: {
                title: "Chứng nhận FSC",
                description: "Chứng nhận Hội đồng Quản lý Rừng đảm bảo nguồn gỗ có trách nhiệm và thực hành quản lý rừng bền vững.",
                benefit1: "Lâm nghiệp bền vững",
                benefit2: "Nguồn cấp có trách nhiệm"
            },
            carb: {
                title: "Tuân thủ CARB",
                description: "Tuân thủ tiêu chuẩn khí thải formaldehyde của Bộ Tài nguyên Không khí California cho sản phẩm gỗ.",
                benefit1: "Khí thải formaldehyde thấp",
                benefit2: "Bảo vệ chất lượng không khí"
            },
            greenguard: {
                title: "Chứng nhận GREENGUARD",
                description: "Chứng nhận khí thải hóa chất thấp tạo môi trường trong nhà lành mạnh hơn.",
                benefit1: "Môi trường trong nhà lành mạnh",
                benefit2: "Khí thải hóa chất thấp"
            },
            benefits: {
                title: "Lợi ích môi trường",
                description: "Các chứng nhận môi trường của chúng tôi đảm bảo sản phẩm lành mạnh hơn, giảm tác động môi trường và tuân thủ các yêu cầu bền vững toàn cầu."
            }
        },
        contact: {
            title: "Liên hệ",
            subtitle: "Liên hệ với chúng tôi để nhận báo giá miễn phí và dịch vụ tư vấn chuyên nghiệp.",
            cta: {
                title: "Từ thiết kế đến sản xuất hàng loạt, chúng tôi hiện thực hóa cho bạn",
                lead: "Chia sẻ yêu cầu sản phẩm và đội ngũ của chúng tôi sẽ đề xuất giải pháp OEM/ODM phù hợp.",
                highlight1: "OEM & ODM trọn gói",
                highlight2: "39+ năm kinh nghiệm sản xuất",
                highlight3: "Lợi thế sản xuất tại Việt Nam",
                emailButton: "Email growth@topperform.com",
                responseNote: "Chúng tôi thường phản hồi trong 1–2 ngày làm việc.",
                socialLabel: "Theo dõi chúng tôi"
            },
            formTitle: "Yêu cầu báo giá trực tuyến",
            formSubtitle: "Điền thông tin bên dưới, chúng tôi sẽ phản hồi với đề xuất phù hợp.",
            phone: {
                title: "Liên hệ điện thoại",
                label: "Điện thoại:"
            },
            mobile: {
                label: "Di động:"
            },
            japan: {
                label: "Nhật Bản:"
            },
            china: {
                label: "Trung Quốc:"
            },
            online: {
                title: "Liên hệ trực tuyến"
            },
            email: {
                label: "Email:"
            },
            website: {
                label: "Website:"
            },
            address: {
                title: "Địa chỉ công ty",
                full: "Khu vực A-CN-2, Cụm công nghiệp Quỳnh Giao, Xã Quỳnh Giao, Huyện Quỳnh Phụ, Tỉnh Thái Bình 413760, Việt Nam"
            },
            form: {
                name: "Người liên hệ *",
                email: "Email liên hệ *",
                phone: "Điện thoại",
                company: "Tên công ty",
                website: "Website công ty",
                message: "Nội dung tin nhắn *",
                submit: "Gửi yêu cầu báo giá"
            },
            formErrors: {
                required: "Trường này là bắt buộc.",
                invalidEmail: "Vui lòng nhập địa chỉ email hợp lệ.",
                whitespace: "Không được chỉ nhập khoảng trắng."
            }
        },
        about: {
            title: "Về Top Performance Vietnam",
            lead: "Di sản chuyên môn, bắt rễ từ Việt Nam, phục vụ toàn cầu.",
            subtitle: "Top Performance Vietnam, thành lập năm 2024, là công ty con sở hữu hoàn toàn của Tang Zhou Enterprise tại Đài Loan. Với hơn 39 năm kinh nghiệm sản xuất nội thất từ công ty mẹ, chúng tôi đã đầu tư hàng triệu USD vào cơ sở sản xuất tích hợp 70.000 m² tại tỉnh Thái Bình, Việt Nam.",
            partner: "Chúng tôi không chỉ là nhà sản xuất—chúng tôi là đối tác chiến lược của bạn. Bằng cách tích hợp lợi thế chuỗi cung ứng Việt Nam và ưu đãi thuế quan, chúng tôi cung cấp dịch vụ OEM/ODM chất lượng cao, hiệu quả chi phí cho khách hàng toàn cầu.",
            capabilities: {
                title: "Năng lực toàn diện",
                description: "Được trang bị các cơ sở hiện đại bao gồm xưởng gia công kim loại, dây chuyền sản xuất sơn hoàn toàn tự động, trung tâm gia công panel CNC và thiết bị ép phun."
            },
            quality: {
                title: "Đảm bảo chất lượng",
                description: "Phòng thí nghiệm nội bộ của chúng tôi đảm bảo tuân thủ các tiêu chuẩn toàn cầu thông qua các giao thức kiểm tra nghiêm ngặt và các chương trình chứng nhận toàn diện."
            },
            flexibility: {
                title: "Tính linh hoạt toàn cầu",
                description: "Tận dụng các lợi thế chiến lược của Việt Nam và hệ sinh thái chuỗi cung ứng trưởng thành để cung cấp các dịch vụ tùy chỉnh linh hoạt cho khách hàng toàn cầu."
            }
        },
        whoWeServe: {
            title: "Đối tượng phục vụ",
            subtitle: "Đối tác OEM/ODM tin cậy của bạn trong sản xuất nội thất",
            usBrands: "Thương hiệu nội thất Mỹ",
            usBrandsDesc: "Thương hiệu nội thất lớn tại thị trường Mỹ với hiện diện bán lẻ toàn quốc—chúng tôi cung cấp chất lượng quy mô lớn.",
            relocation: "Chuyển dịch sản xuất",
            relocationDesc: "Các công ty đối mặt thuế quan Mỹ hoặc tìm đa dạng hóa chuỗi cung ứng—chúng tôi giúp bạn chuyển sản xuất sang Việt Nam thuận lợi.",
            global: "Đối tác toàn cầu",
            globalDesc: "Nhà sản xuất nội thất Việt Nam, Trung Quốc, Nhật Bản, Hàn Quốc—chúng tôi chào đón dự án ODM và hợp tác năng lực.",
            startups: "Startup & Scale-up",
            startupsDesc: "Thương hiệu mới hoặc thương hiệu có năng lực hạn chế—thiết kế ODM và sản xuất OEM của chúng tôi giúp bạn ra thị trường nhanh hơn."
        },
        craft: {
            title: "Công nghệ & Kỹ thuật",
            subtitle: "Toàn bộ chuỗi sản xuất từ phát triển khuôn đến lắp ráp hoàn chỉnh",
            mold: { title: "Thiết kế & Sản xuất khuôn", desc: "Quy trình DFM và phân tích dòng chảy khuôn với CNC, EDM, cắt dây chính xác cấp micromet. Giao hàng trong 30–60 ngày." },
            metalPipe: { title: "Gia công ống kim loại", desc: "Cắt CNC, uốn 3D, dập và hàn cho ống tròn, vuông và ống tùy chỉnh. 14 máy dập (25–110 tấn) với kiểm tra tích hợp." },
            sheetMetal: { title: "Gia công tấm kim loại", desc: "Cắt laser chính xác (±0.1 mm), uốn CNC 4/6 trục và nhiều phương pháp hàn. Gia công thép, inox, nhôm đến 20 mm." },
            panel: { title: "Gia công panel", desc: "Dây chuyền hoàn chỉnh: cắt CNC, dán cạnh (PUR), khoan 6 mặt, tích hợp MES/ERP. Hỗ trợ ván dăm, MDF, TFL và ván ép." },
            blowMolding: { title: "Thổi nhựa", desc: "Máy thổi đùn lớn cho sản phẩm rỗng cỡ lớn. Vật liệu HDPE/PP, độ dày thành có thể lập trình, tạo bề mặt nội thất nguyên khối." },
            injection: { title: "Ép phun", desc: "Máy 120 đến 1.250 tấn với hệ servo thủy lực chính xác. Gia công PP, ABS, Nylon, PC và hợp chất sợi thủy tinh. Tuổi thọ khuôn trên 500.000 lần." },
            powderCoating: { title: "Sơn phủ bột", desc: "Dây chuyền tự động 595 mét, 21 bước tiền xử lý, cánh tay robot Thụy Sĩ phun đều, hệ thống thu hồi bột, sản xuất 24/7." },
            assembly: { title: "Lắp ráp & QC", desc: "Ba dây chuyền bán tự động tích hợp kim loại, nhựa và panel. Trạm làm việc theo SOP với kiểm tra trong dây chuyền và kiểm tra cuối cùng." }
        },
        testing: {
            title: "Kiểm tra nghiêm ngặt",
            subtitle: "Cam kết chất lượng: Tiêu chuẩn quốc tế và kiểm tra tiên tiến bảo vệ chất lượng sản phẩm của bạn",
            lead: "Chúng tôi vận hành phòng thí nghiệm độc lập nội bộ, trang bị kiểm tra toàn diện từ phân tích vật liệu đến thử nghiệm vòng đời sản phẩm, đảm bảo mọi bước từ nguyên liệu đến xuất hàng đáp ứng các tiêu chuẩn an toàn và chất lượng khắt khe nhất thế giới."
        },
        workplace: {
            title: "Môi trường làm việc thân thiện",
            subtitle: "Tại Top Performance Vietnam, chúng tôi xem đội ngũ không chỉ là nhân viên mà còn là gia đình mở rộng.",
            lead: "Chúng tôi nỗ lực tạo bầu không khí thoải mái, chào đón nơi bạn có thể cảm thấy thoải mái và chân thật như ở nhà. Chúng tôi tin rằng an tâm dẫn đến công việc tuyệt vời.",
            compensation: "Đãi ngộ cạnh tranh",
            compensationDesc: "Cung cấp mức lương và phúc lợi thực sự trân trọng đóng góp của bạn.",
            workLife: "Cân bằng công việc - cuộc sống",
            workLifeDesc: "Tôn trọng thời gian cá nhân của bạn với giờ làm việc hợp lý.",
            ethics: "Tiêu chuẩn đạo đức",
            ethicsDesc: "Tuân thủ nghiêm ngặt luật lao động quốc tế với không dung thứ lao động cưỡng bức."
        },
        productTypes: {
            title: "Danh mục sản phẩm",
            subtitle: "Giải pháp giáo dục, thương mại và công nghiệp—sẵn sàng OEM & ODM",
            educational: "Giáo dục",
            educationalDesc: "Bàn học sinh, ghế học sinh, bàn ghép",
            commercial: "Thương mại",
            commercialDesc: "Bàn quản lý, bàn điều chỉnh chiều cao, tủ, kệ kim loại",
            industrial: "Công nghiệp & Khác",
            industrialDesc: "Pallet thổi nhựa, kẹp nam châm, linh kiện nhựa, dụng cụ"
        },
        products: {
            title: "Sản phẩm nổi bật",
            subtitle: "Sản phẩm bao gồm nội thất văn phòng, nội thất giáo dục đào tạo, nội thất trẻ em, nội thất trong nhà và đồ nội thất gia đình.",
            loading: "Đang tải sản phẩm...",
            noProducts: "Khu vực sản phẩm đang được xây dựng",
            noProductsDesc: "Chúng tôi đang chuẩn bị nội dung hiển thị sản phẩm một cách cẩn thận. Vui lòng chờ đợi sản phẩm chất lượng cao của Top Performance Vietnam.",
            introLine1: "Top Performance Vietnam là chuyên gia trong việc cung cấp nội thất văn phòng, nội thất giáo dục đào tạo và nội thất gia đình có chất lượng cao.",
            introLine2: "Sản phẩm của chúng tôi bao gồm nội thất văn phòng, tủ lưu trữ, nội thất trẻ em và các dòng sản phẩm khác để đáp ứng nhu cầu đa dạng của khách hàng.",
            viewDetails: "Xem chi tiết",
            features: {
                multifunctional: "Đa chức năng",
                flexibleDesign: "Thiết kế linh hoạt",
                safeEcoFriendly: "An toàn & Thân thiện môi trường",
                childSpecific: "Dành riêng cho trẻ em",
                minimalistDesign: "Thiết kế tối giản",
                spaceOptimization: "Tối ưu hóa không gian",
                largeCapacity: "Dung lượng lớn",
                officeSpecific: "Dành riêng cho văn phòng",
                flexibleApplication: "Ứng dụng linh hoạt"
            },
            details: {
                photos: "Hình ảnh sản phẩm",
                description: "Mô tả sản phẩm",
                specifications: "Thông số kỹ thuật",
                width: "Chiều rộng",
                depth: "Chiều sâu",
                height: "Chiều cao",
                weight: "Trọng lượng"
            },
                flipTable: {
                title: "Bàn gập",
                description: "Bàn gập đa chức năng linh hoạt phù hợp cho môi trường văn phòng và giáo dục hiện đại."
            },
            childWardrobe: {
                title: "Bộ tủ quần áo trẻ em hai cánh màu vân gỗ trắng",
                description: "Tủ quần áo trẻ em được thiết kế đẹp mắt, thực dụng, an toàn và thân thiện với môi trường."
                },
                bookshelf: {
                title: "Kệ sách mở hình khối gỗ tự nhiên",
                description: "Kệ sách lưu trữ thiết kế tối giản hiện đại giúp tăng cường việc sử dụng không gian."
            },
            fileCabinet: {
                title: "Tủ tài liệu đa chức năng hai cánh màu xám trắng cao",
                description: "Giải pháp lưu trữ tài liệu dung lượng cao dành riêng cho văn phòng."
            },
            storageCabinet: {
                title: "Tủ lưu trữ đa chức năng",
                description: "Giải pháp lưu trữ linh hoạt phù hợp với các yêu cầu không gian khác nhau."
            }
        },
        expo: {
            title: "Gặp chúng tôi tại EDSpaces 2025",
            subtitle: "Trung tâm Hội nghị Greater Columbus, Hoa Kỳ",
            lead: "Chúng tôi sẽ trưng bày các giải pháp nội thất cho trường học và tổ chức giáo dục.",
            details: {
                dateLabel: "Thời gian",
                dateValue: "5-7 tháng 11 năm 2025",
                locationLabel: "Địa điểm",
                locationValue: "Greater Columbus Convention Center, Columbus, Ohio, Hoa Kỳ",
                boothLabel: "Gian hàng",
                boothValue: "1153"
            },
            cta: "Chúng tôi hân hạnh chào đón quý khách và đối tác trong ngành đến tham quan.",
            viewCatalog: "Xem Danh Mục Điện Tử"
        },
        footer: {
            company: {
                name: "Top Performance Vietnam",
                description: "Nhà sản xuất nội thất chuyên nghiệp cung cấp giải pháp OEM/ODM trọn gói."
            },
            links: {
                title: "Liên kết nhanh",
                privacy: "Chính sách bảo mật",
                terms: "",
                sitemap: ""
            },
            contact: {
                title: "Thông tin liên hệ",
                phone: "Điện thoại:",
                email: "Email:",
                address: "Địa chỉ:",
                website: "Website:",
                location: "Khu vực A-CN-2, Cụm công nghiệp Quỳnh Giao, Xã Quỳnh Giao, Huyện Quỳnh Phụ, Tỉnh Thái Bình 413760, Việt Nam"
            },
            services: {
                title: "Dịch vụ",
                metalProcessing: "Gia công kim loại",
                injectionMolding: "Ép phun",
                powderCoating: "Sơn phủ bột",
                moldManufacturing: "Sản xuất khuôn mẫu",
                woodProcessing: "Gia công gỗ",
                oneStopService: "Dịch vụ một cửa"
            },
            copyright: "© {YEAR} Top Performance Vietnam Co., Ltd. Bảo lưu mọi quyền"
        },
        privacy: {
            content: "Chúng tôi không thực hiện theo dõi chéo trang, phân tích hành vi hoặc tiếp thị lại; cũng không sử dụng cookie không cần thiết. Dữ liệu biểu mẫu chỉ dùng để phản hồi yêu cầu của bạn và không chia sẻ cho bên thứ ba."
        },
        notifications: {
            sending: "Đang gửi...",
            success: "Tin nhắn của bạn đã được gửi. Chúng tôi sẽ phản hồi sớm.",
            missingRequired: "Vui lòng điền đầy đủ các trường bắt buộc.",
            failed: "Gửi thất bại. Vui lòng thử lại sau hoặc liên hệ qua email.",
            quotaExceeded: "Đã đạt giới hạn gửi hàng tháng. Vui lòng liên hệ qua email.",
            captchaRequired: "Vui lòng hoàn tất xác minh."
        },
        chat: {
            placeholder: "Nhập tin nhắn...",
            welcome: "Xin chào, tôi là Nancy. Tôi có thể hỗ trợ nhu cầu sản xuất nội thất của bạn như thế nào?"
        },
        capabilities: {
            title: "Khả năng sản xuất toàn diện",
            subtitle: "Giải pháp sản xuất trọn gói hoàn chỉnh",
            plastic: {
                title: "Gia công nhựa tiên tiến",
                description: "Khả năng in 3D, gia công CNC, ép phun và thổi nhựa hiện đại cho các bộ phận nhựa chính xác.",
                features: {
                    feature1: "In 3D",
                    feature2: "Cắt CNC", 
                    feature3: "Ép phun",
                    feature4: "Thổi nhựa"
                }
            },
            metal: {
                title: "Gia công kim loại chuyên nghiệp",
                description: "Cơ sở gia công kim loại hoàn chỉnh với máy tiện CNC chuyên nghiệp, dập, hàn và xử lý bề mặt.",
                features: {
                    feature1: "Máy tiện CNC",
                    feature2: "Dập kim loại",
                    feature3: "Hàn chuyên nghiệp", 
                    feature4: "Xử lý bề mặt"
                }
            },
            wood: {
                title: "Gia công gỗ chuyên nghiệp",
                description: "Cơ sở chế biến gỗ toàn diện với gia công tấm CNC tiên tiến và chuyên môn thủ công truyền thống.",
                features: {
                    feature1: "Tấm CNC",
                    feature2: "Cắt chính xác",
                    feature3: "Thủ công truyền thống", 
                    feature4: "Hoàn thiện bề mặt"
                }
            },
            service: {
                title: "Dịch vụ trọn gói",
                description: "Dịch vụ từ đầu đến cuối từ thiết kế mẫu đến sản xuất hàng loạt và vận chuyển.",
                features: {
                    feature1: "Thiết kế & Mẫu",
                    feature2: "Sản xuất hàng loạt",
                    feature3: "Kiểm tra chất lượng",
                    feature4: "Logistics & Vận chuyển"
                }
            }
        }
    },
    th: {
        "nav": {
            "home": "หน้าแรก",
            "about": "เกี่ยวกับเรา",
            "capabilities": "ศักยภาพการผลิต",
            "products": "ผลิตภัณฑ์",
            "services": "บริการ",
            "certification": "การรับรอง",
            "quality": "คุณภาพ",
            "contact": "ติดต่อเรา",
            "selectLanguage": "เลือกภาษา",
            "closeLanguage": "ปิดเมนูภาษา",
            "consultBtn": "ขอราคา",
            "craft": "เทคโนโลยี",
            "testing": "คุณภาพ",
            "workplace": "สภาพแวดล้อม",
            "whoWeServe": "ลูกค้า"
        },
        theme: {
            light: "เปลี่ยนเป็นโหมดสว่าง",
            dark: "เปลี่ยนเป็นโหมดมืด"
        },
        "hero": {
            "title": "ผลิตในเวียดนาม<br>นำคุณภาพเฟอร์นิเจอร์ที่ยอดเยี่ยม",
            "subtitle": "บริษัท ท็อปเพอร์ฟอร์แมนซ์ เวียดนาม จำกัด ด้วยประสบการณ์กว่า 39 ปี เทคโนโลยีล้ำสมัย และบริการครบวงจรแบบวันสต็อปโซลูชัน มอบการแก้ปัญหา OEM/ODM ระดับโลกแก่ลูกค้าทั่วโลก",
            "learnMore": "เรียนรู้เพิ่มเติม",
            "contactUs": "ติดต่อเรา",
            "stats": {
                "experience": "ปีแห่งประสบการณ์",
                "employees": "พนักงานมืออาชีพ",
                "factory": "ตารางเมตรของโรงงาน",
                "locations": "ฐานการผลิต"
            }
        },
        "vietnamAdvantage": {
            "title": "ข้อได้เปรียบการผลิตในเวียดนาม",
            "subtitle": "ความได้เปรียบเชิงกลยุทธ์ในปี {YEAR} ของการค้าโลก",
            "tariffTitle": "ข้อได้เปรียบทางภาษีสหรัฐ",
            "tariffContent": "เวียดนามได้รับสิทธิพิเศษทางภาษีจากสหรัฐฯ หลีกเลี่ยงภาษีเพิ่มเติมที่ประเทศอื่นๆ ต้องจ่าย",
            "costTitle": "ความได้เปรียบด้านต้นทุน",
            "costContent": "ลดต้นทุนแรงงานและการดำเนินงานโดยยังคงมาตรฐานคุณภาพสูง มอบคุณค่าแก่การลงทุนของคุณ",
            "supplyTitle": "ซัพพลายเชนที่แข็งแกร่ง",
            "supplyContent": "โครงสร้างพื้นฐานซัพพลายเชนที่สมบูรณ์และตำแหน่งเชิงกลยุทธ์เพื่อการกระจายสินค้าทั่วโลกที่มีประสิทธิภาพ"
        },
        "certifications": {
            "title": "การรับรองคุณภาพและความปลอดภัย",
            "subtitle": "มาตรฐานสากรครอบคลุมสำหรับตลาดโลก",
            "iso9001": {
                "title": "ISO 9001",
                "description": "การรับรองระบบการจัดการคุณภาพ เพื่อให้มั่นใจถึงความสม่ำเสมอของคุณภาพและความพึงพอใจของลูกค้า",
                "benefit1": "การรับประกันคุณภาพ",
                "benefit2": "ความพึงพอใจของลูกค้า"
            },
            "iso14001": {
                "title": "ISO 14001",
                "description": "การรับรองระบบการจัดการสิ่งแวดล้อม แสดงถึงความรับผิดชอบต่อสิ่งแวดล้อมของเรา",
                "benefit1": "การปกป้องสิ่งแวดล้อม",
                "benefit2": "การพัฒนาที่ยั่งยืน"
            },
            "cpsia": {
                "title": "สอดคล้องกับ CPSIA",
                "description": "เป็นไปตามกฎหมายความปลอดภัยผลิตภัณฑ์สำหรับเด็กของสหรัฐ เพื่อให้มั่นใจในความปลอดภัยของเด็ก",
                "benefit1": "ความปลอดภัยของเด็ก",
                "benefit2": "ตลาดสหรัฐ"
            },
            "astm": {
                "title": "มาตรฐาน ASTM",
                "description": "สอดคล้องตามมาตรฐานความปลอดภัยและคุณภาพของ ASTM สหรัฐ",
                "benefit1": "ความปลอดภัยของวัสดุ",
                "benefit2": "การยอมรับระดับสากล"
            },
            "cpsc": {
                "title": "สอดคล้องกับ CPSC",
                "description": "เป็นไปตามข้อกำหนดของคณะกรรมการความปลอดภัยสินค้าอุปโภคบริโภคสหรัฐ",
                "benefit1": "ความปลอดภัยของผู้บริโภค",
                "benefit2": "การปฏิบัติตามข้อกำหนด"
            }
        },
        "environmental": {
            "title": "ความเป็นเลิศด้านสิ่งแวดล้อม",
            "subtitle": "การผลิตที่ยั่งยืนเพื่ออนาคตที่ดีกว่า",
            "fsc": {
                "title": "การรับรอง FSC",
                "description": "การรับรองจากคณะกรรมการจัดการป่าไม้ เพื่อรับประกันการจัดหาวัสดุไม้และการจัดการป่าไม้อย่างยั่งยืน",
                "benefit1": "การจัดการป่าไม้อย่างยั่งยืน",
                "benefit2": "การจัดซื้ออย่างมีความรับผิดชอบ"
            },
            "carb": {
                "title": "สอดคล้องกับ CARB",
                "description": "เป็นไปตามมาตรฐานการปล่อยฟอร์มาลดีไฮด์จากผลิตภัณฑ์ไม้ของ CARB",
                "benefit1": "การปล่อยฟอร์มาลดีไฮด์ต่ำ",
                "benefit2": "การปกป้องคุณภาพอากาศ"
            },
            "greenguard": {
                "title": "การรับรอง GREENGUARD",
                "description": "การรับรองการปล่อยสารเคมีต่ำ เพื่อสร้างสภาพแวดล้อมในร่มที่ปลอดภัยขึ้น",
                "benefit1": "สิ่งแวดล้อมภายในที่ดีต่อสุขภาพ",
                "benefit2": "การปล่อยสารเคมีต่ำ"
            },
            "benefits": {
                "title": "ประโยชน์ด้านสิ่งแวดล้อม",
                "description": "การรับรองสิ่งแวดล้อมของเราช่วยให้ผลิตภัณฑ์ดีต่อสุขภาพ ลดผลกระทบต่อสิ่งแวดล้อม และสอดคล้องกับความยั่งยืนระดับโลก"
            }
        },
        "contact": {
            "title": "ติดต่อเรา",
            "subtitle": "ติดต่อเราเพื่อขอใบเสนอราคาและคำปรึกษาฟรี",
            "cta": {
                "title": "ตั้งแต่การออกแบบจนถึงการผลิต เราทำให้เป็นจริงให้คุณ",
                "lead": "แชร์ความต้องการด้านผลิตภัณฑ์ ทีมงานของเราจะเสนอแนวทาง OEM/ODM ที่เหมาะสม",
                "highlight1": "OEM & ODM ครบวงจร",
                "highlight2": "ประสบการณ์การผลิตกว่า 39 ปี",
                "highlight3": "ข้อได้เปรียบการผลิตในเวียดนาม",
                "emailButton": "อีเมล growth@topperform.com",
                "responseNote": "เรามักตอบกลับภายใน 1–2 วันทำการ",
                "socialLabel": "ติดตามเรา"
            },
            "formTitle": "ขอใบเสนอราคาออนไลน์",
            "formSubtitle": "กรอกรายละเอียดด้านล่าง เราจะติดต่อกลับพร้อมข้อเสนอที่เหมาะสม",
            "phone": {
                "title": "โทรศัพท์ติดต่อ",
                "label": "โทร:"
            },
            "mobile": {
                "label": "มือถือ:"
            },
            "japan": {
                "label": "ญี่ปุ่น:"
            },
            "china": {
                "label": "จีน:"
            },
            "online": {
                "title": "ติดต่อออนไลน์"
            },
            "email": {
                "label": "อีเมล:"
            },
            "website": {
                "label": "เว็บไซต์:"
            },
            "address": {
                "title": "ที่อยู่บริษัท",
                "full": "เขตอุตสาหกรรม Quynh Giao, อำเภอ Quynh Phu, จังหวัด Thai Binh, เวียดนาม - โซน A-CN-2"
            },
            "form": {
                "name": "ผู้ติดต่อ *",
                "email": "อีเมลติดต่อ *",
                "phone": "โทรศัพท์",
                "website": "เว็บไซต์บริษัท",
                "company": "ชื่อบริษัท",
                "message": "ข้อความ *",
                "submit": "ส่งคำขอใบเสนอราคา"
            },
            "formErrors": {
                "required": "จำเป็นต้องกรอกข้อมูลในช่องนี้",
                "invalidEmail": "กรุณากรอกที่อยู่อีเมลที่ถูกต้อง",
                "whitespace": "ไม่สามารถกรอกเฉพาะช่องว่างได้"
            }
        },
        "about": {
            "title": "เกี่ยวกับ Top Performance Vietnam",
            "lead": "มรดกแห่งความเชี่ยวชาญ ถิ่นฐานในเวียดนาม บริการทั่วโลก",
            "subtitle": "Top Performance Vietnam ก่อตั้งเมื่อปี 2024 เป็นบริษัทย่อยของ Tang Zhou Enterprise ในไต้หวัน ด้วยความเชี่ยวชาญการผลิตเฟอร์นิเจอร์กว่า 39 ปีจากบริษัทแม่ เราได้ลงทุนหลายล้านในฐานการผลิตแบบบูรณาการแนวดิ่ง 70,000 ตร.ม. ที่จังหวัดไทบิงห์ เวียดนาม",
            "partner": "เราไม่ใช่แค่ผู้ผลิต—เราเป็นพันธมิตรเชิงกลยุทธ์ของคุณ โดยการผสานข้อได้เปรียบซัพพลายเชนเวียดนามและสิทธิประโยชน์ทางภาษี เรามอบบริการ OEM/ODM ที่มีประสิทธิภาพด้านต้นทุนและคุณภาพสูงสำหรับลูกค้าทั่วโลก",
            "capabilities": {
                "title": "ศักยภาพครบวงจร",
                "description": "ติดตั้งสิ่งอำนวยความสะดวกล้ำสมัย เช่น การแปรรูปโลหะ สายการพ่นสีอัตโนมัติเต็มรูปแบบ ศูนย์การแปรรูปแผ่น CNC และเครื่องฉีดพลาสติก"
            },
            "quality": {
                "title": "การรับประกันคุณภาพ",
                "description": "ห้องปฏิบัติการภายในผ่านการทดสอบเข้มงวดและโครงการรับรอง เพื่อให้มั่นใจได้ตามมาตรฐานสากล"
            },
            "flexibility": {
                "title": "ความยืดหยุ่นระดับโลก",
                "description": "ใช้ประโยชน์จากข้อได้เปรียบเชิงกลยุทธ์ของเวียดนามและระบบซัพพลายเชนที่พัฒนาแล้ว เพื่อตอบสนองลูกค้าทั่วโลกด้วยบริการที่ปรับแต่งได้"
            }
        },
        "whoWeServe": {
            "title": "ลูกค้าของเรา",
            "subtitle": "พันธมิตร OEM/ODM ที่เชื่อถือได้สำหรับการผลิตเฟอร์นิเจอร์",
            "usBrands": "แบรนด์เฟอร์นิเจอร์สหรัฐ",
            "usBrandsDesc": "แบรนด์เฟอร์นิเจอร์ขนาดใหญ่ในตลาดสหรัฐที่มีการจัดจำหน่ายทั่วประเทศ—เราส่งมอบคุณภาพในระดับใหญ่",
            "relocation": "การย้ายฐานการผลิต",
            "relocationDesc": "บริษัทที่เผชิญภาษีสหรัฐหรือต้องการกระจายซัพพลายเชน—เราช่วยคุณย้ายการผลิตไปเวียดนามอย่างราบรื่น",
            "global": "พันธมิตรระดับโลก",
            "globalDesc": "ผู้ผลิตเฟอร์นิเจอร์เวียดนาม จีน ญี่ปุ่น เกาหลี—เรายินดีต้อนรับโครงการ ODM และพันธมิตรความสามารถ",
            "startups": "สตาร์ทอัพและสเกลอัพ",
            "startupsDesc": "แบรนด์ใหม่หรือแบรนด์ที่มีความสามารถจำกัด—การออกแบบ ODM และการผลิต OEM ของเรา ช่วยให้คุณเข้าสู่ตลาดได้เร็วขึ้น"
        },
        "craft": {
            "title": "เทคโนโลยีและฝีมือ",
            "subtitle": "สายการผลิตเต็มรูปแบบตั้งแต่การพัฒนาพิมพ์จนถึงการประกอบ",
            "mold": { "title": "การออกแบบและผลิตแม่พิมพ์", "desc": "กระบวนการ DFM และวิเคราะห์การไหลของแม่พิมพ์ด้วย CNC, EDM, ตัดลวดความแม่นยำระดับไมครอน ส่งมอบใน 30–60 วัน" },
            "metalPipe": { "title": "การแปรรูปท่อโลหะ", "desc": "CNC ตัด, ดัด 3D, ปั๊ม และเชื่อมสำหรับท่อกลม, สี่เหลี่ยม และท่อพิเศษ เครื่องปั๊ม 14 เครื่อง (25–110 ตัน) พร้อมระบบตรวจสอบ" },
            "sheetMetal": { "title": "การแปรรูปแผ่นโลหะ", "desc": "ตัดเลเซอร์ความแม่นยำ (±0.1 มม.), CNC ดัด 4/6 แกน และวิธีเชื่อมหลายรูปแบบ แปรรูปเหล็ก, สเตนเลส, อลูมิเนียมถึง 20 มม." },
            "panel": { "title": "การแปรรูปแผ่น", "desc": "สายการผลิตครบวงจร: CNC ตัด, ปิดขอบ (PUR), เจาะ 6 ด้าน ผสานกับ MES/ERP รองรับ Particleboard, MDF, TFL และไม้อัด" },
            "blowMolding": { "title": "การเป่าพลาสติก", "desc": "เครื่องเป่าอัดรีดขนาดใหญ่สำหรับชิ้นส่วนกลวงขนาดใหญ่ วัสดุ HDPE/PP ความหนาผนังโปรแกรมได้ ผลิตพื้นผิวเฟอร์นิเจอร์ทั้งชิ้น" },
            "injection": { "title": "การฉีดขึ้นรูป", "desc": "เครื่อง 120 ถึง 1,250 ตันพร้อมเซอร์โวไฮดรอลิกแม่นยำ แปรรูป PP, ABS, ไนลอน, PC และไฟเบอร์กลาส อายุแม่พิมพ์เกิน 500,000 ช็อต" },
            "powderCoating": { "title": "การเคลือบผง", "desc": "สายอัตโนมัติ 595 เมตร 21 ขั้นตอนเตรียมผิว แขนหุ่นยนต์สวิสพ่นสม่ำเสมอ ระบบกู้คืนผง ผลิตได้ 24/7" },
            "assembly": { "title": "การประกอบและ QC", "desc": "สายประกอบกึ่งอัตโนมัติ 3 สาย รวมโลหะ พลาสติก และแผ่นไม้ สถานีทำงานตาม SOP พร้อมตรวจสอบระหว่างสายและขั้นสุดท้าย" }
        },
        "testing": {
            "title": "การทดสอบอย่างเข้มงวด",
            "subtitle": "ความมุ่งมั่นด้านคุณภาพ: มาตรฐานสากลและการทดสอบขั้นสูงปกป้องคุณภาพผลิตภัณฑ์ของคุณ",
            "lead": "เรามีห้องปฏิบัติการอิสระในบริษัท พร้อมการทดสอบครบวงจรตั้งแต่การวิเคราะห์วัสดุจนถึงการทดสอบวงจรชีวิตผลิตภัณฑ์ เพื่อให้มั่นใจว่าทุกขั้นตอนจากวัตถุดิบจนถึงการจัดส่งตรงตามมาตรฐานความปลอดภัยและคุณภาพที่เข้มงวดที่สุดของโลก"
        },
        "workplace": {
            "title": "สภาพแวดล้อมการทำงานที่เป็นมิตร",
            "subtitle": "ที่ Top Performance Vietnam เราเห็นทีมงานไม่ใช่แค่พนักงาน แต่เป็นครอบครัวขยาย",
            "lead": "เราพยายามสร้างบรรยากาศที่ผ่อนคลายและเป็นมิตรที่คุณสามารถรู้สึกสบายและเป็นตัวของตัวเองได้เหมือนอยู่บ้าน เราเชื่อว่าความสงบใจนำไปสู่ผลงานที่ดี",
            "compensation": "ค่าตอบแทนที่แข่งขันได้",
            "compensationDesc": "เสนอเงินเดือนและสวัสดิการที่ให้คุณค่ากับการมีส่วนร่วมของคุณอย่างแท้จริง",
            "workLife": "ความสมดุลงาน-ชีวิต",
            "workLifeDesc": "เคารพเวลาส่วนตัวของคุณด้วยชั่วโมงทำงานที่สมเหตุสมผล",
            "ethics": "มาตรฐานจริยธรรม",
            "ethicsDesc": "ปฏิบัติตามกฎหมายแรงงานสากลอย่างเข้มงวด โดยไม่ยอมรับการใช้แรงงานบังคับ"
        },
        "productTypes": {
            "title": "หมวดหมู่ผลิตภัณฑ์",
            "subtitle": "โซลูชันการศึกษา ค้าปลีก และอุตสาหกรรม—พร้อม OEM & ODM",
            "educational": "การศึกษา",
            "educationalDesc": "โต๊ะนักศึกษา เก้าอี้นักศึกษา โต๊ะแบบโมดูลาร์",
            "commercial": "เชิงพาณิชย์",
            "commercialDesc": "โต๊ะผู้บริหาร โต๊ะปรับความสูง ตู้ ชั้นวางโลหะ",
            "industrial": "อุตสาหกรรมและอื่นๆ",
            "industrialDesc": "พาเลทเป่าพลาสติก คลิปแม่เหล็ก เครื่องมือ"
        },
        "products": {
            "title": "ผลิตภัณฑ์เด่น",
            "subtitle": "ครอบคลุมเฟอร์นิเจอร์สำนักงาน การศึกษา เด็ก ภายในบ้าน และของใช้ในบ้าน",
            "loading": "กำลังโหลดข้อมูลสินค้า...",
            "noProducts": "โซนแสดงสินค้ากำลังก่อสร้าง",
            "noProductsDesc": "เรากำลังเตรียมเนื้อหาการแสดงสินค้าอย่างรอบคอบ โปรดรอคอยผลิตภัณฑ์เฟอร์นิเจอร์คุณภาพของเรา",
            "introLine1": "Top Performance Vietnam เชี่ยวชาญในการให้บริการเฟอร์นิเจอร์สำนักงาน เฟอร์นิเจอร์การศึกษา และของใช้ในบ้านคุณภาพสูง",
            "introLine2": "ผลิตภัณฑ์ของเราครอบคลุมโต๊ะเก้าอี้สำนักงาน ตู้เก็บของ เฟอร์นิเจอร์เด็ก และซีรีส์ที่หลากหลายเพื่อตอบสนองความต้องการของลูกค้าที่แตกต่างกัน",
            "viewDetails": "ดูรายละเอียด",
            "features": {
                "multifunctional": "มัลติฟังก์ชัน",
                "flexibleDesign": "ออกแบบยืดหยุ่น",
                "safeEcoFriendly": "ปลอดภัยและเป็นมิตรต่อสิ่งแวดล้อม",
                "childSpecific": "สำหรับเด็ก",
                "minimalistDesign": "ดีไซน์มินิมอล",
                "spaceOptimization": "ใช้พื้นที่อย่างคุ้มค่า",
                "largeCapacity": "ความจุขนาดใหญ่",
                "officeSpecific": "สำหรับสำนักงาน",
                "flexibleApplication": "ประยุกต์ใช้ได้ยืดหยุ่น"
            },
            "details": {
                "photos": "รูปภาพสินค้า",
                "description": "คำอธิบายสินค้า",
                "specifications": "ข้อมูลจำเพาะสินค้า",
                "width": "ความกว้าง",
                "depth": "ความลึก",
                "height": "ความสูง",
                "weight": "น้ำหนัก"
            },
            "flipTable": {
                "title": "โต๊ะพับได้",
                "description": "โต๊ะอเนกประสงค์ยืดหยุ่น เหมาะกับสำนักงานและสถาบันการศึกษา"
            },
            "childWardrobe": {
                "title": "ตู้เสื้อผ้าเด็ก ลายไม้สีขาว 2 ประตู",
                "description": "ออกแบบสวยงาม ใช้งานได้จริง ปลอดภัยและเป็นมิตรต่อสิ่งแวดล้อม"
            },
            "bookshelf": {
                "title": "ชั้นวางหนังสือไม้ธรรมชาติแบบเปิด",
                "description": "ดีไซน์เรียบง่าย ทันสมัย ใช้พื้นที่ได้อย่างคุ้มค่า"
            },
            "fileCabinet": {
                "title": "ตู้เอกสาร 2 ประตู สีขาว-เทา",
                "description": "โซลูชันการจัดเก็บเอกสารความจุสูง สำหรับสำนักงาน"
            },
            "storageCabinet": {
                "title": "ตู้เก็บของอเนกประสงค์",
                "description": "โซลูชันการจัดเก็บยืดหยุ่น สำหรับความต้องการพื้นที่หลากหลาย"
            }
        },
        "expo": {
            "title": "งานแสดงสินค้า ESPace 2025",
            "subtitle": "ศูนย์ประชุม Greater Columbus, สหรัฐอเมริกา",
            "lead": "เราจะแสดงโซลูชันเฟอร์นิเจอร์สำหรับโรงเรียนและสถาบันการศึกษา",
            "details": {
                "dateLabel": "วันที่",
                "dateValue": "5-7 พฤศจิกายน 2025",
                "locationLabel": "สถานที่",
                "locationValue": "Greater Columbus Convention Center, Columbus, Ohio, USA",
                "boothLabel": "บูธ",
                "boothValue": "1153"
            },
            "cta": "ขอเชิญผู้เยี่ยมชมและพันธมิตรในอุตสาหกรรมเข้าชมงาน",
            "viewCatalog": "ดูแคตตาล็อกดิจิทัล"
        },
        "footer": {
            "company": {
                "name": "Top Performance Vietnam",
                "description": "ผู้ผลิตเฟอร์นิเจอร์มืออาชีพ มอบโซลูชัน OEM/ODM แบบครบวงจร มุ่งมั่นเป็นพันธมิตรอันดับหนึ่งของคุณในด้านการจัดหาเฟอร์นิเจอร์ระดับโลก"
            },
            "links": {
                "title": "ลิงก์ด่วน",
                "privacy": "นโยบายความเป็นส่วนตัว",
                "terms": "",
                "sitemap": ""
            },
            "contact": {
                "title": "ข้อมูลติดต่อ",
                "phone": "โทร:",
                "email": "อีเมล:",
                "address": "ที่อยู่:",
                "website": "เว็บไซต์:",
                "location": "เขตอุตสาหกรรม Quynh Giao, อำเภอ Quynh Phu, จังหวัด Thai Binh, เวียดนาม - โซน A-CN-2"
            },
            "services": {
                "title": "บริการ",
                "metalProcessing": "การแปรรูปโลหะ",
                "injectionMolding": "การฉีดขึ้นรูป",
                "powderCoating": "การเคลือบผง",
                "moldManufacturing": "การผลิตแม่พิมพ์",
                "woodProcessing": "การแปรรูปไม้",
                "oneStopService": "บริการครบวงจร"
            },
            "copyright": "© {YEAR} Top Performance Vietnam Co., Ltd. สงวนลิขสิทธิ์"
        },
        "privacy": {
            "content": "เราไม่ทำการติดตามข้ามเว็บไซต์ วิเคราะห์พฤติกรรม หรือทำการรีมาร์เก็ตติ้งโฆษณา และไม่ใช้คุกกี้ที่ไม่จำเป็น ข้อมูลจากฟอร์มใช้เพื่อตอบคำถามของคุณเท่านั้น จะไม่ถูกแชร์กับบุคคลที่สาม"
        },
        "notifications": {
            "sending": "กำลังส่ง...",
            "success": "ส่งข้อความสำเร็จแล้ว! เราจะติดต่อคุณโดยเร็ว",
            "missingRequired": "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน",
            "failed": "การส่งล้มเหลว กรุณาลองอีกครั้งหรือใช้อีเมลติดต่อเรา",
            "quotaExceeded": "จำนวนการส่งเต็มแล้วในเดือนนี้ กรุณาใช้อีเมลติดต่อเราแทน",
            "captchaRequired": "กรุณาทำการยืนยัน"
        },
        "chat": {
            "placeholder": "พิมพ์ข้อความ...",
            "welcome": "สวัสดีค่ะ ฉันคือแนนซี่ ฉันสามารถช่วยคุณเกี่ยวกับการผลิตเฟอร์นิเจอร์ได้อย่างไร?"
        },
        "capabilities": {
            "title": "ศักยภาพการผลิตครบวงจร",
            "subtitle": "โซลูชันการผลิตแบบวันสต็อปครบถ้วน",
            "plastic": {
                "title": "การแปรรูปพลาสติกล้ำสมัย",
                "description": "ความสามารถด้านการพิมพ์ 3 มิติ การตัด CNC การฉีดและการเป่าพลาสติก",
                "features": {
                "feature1": "การพิมพ์ 3 มิติ",
                "feature2": "การตัด CNC",
                "feature3": "การฉีดขึ้นรูป",
                "feature4": "การเป่าพลาสติก"
                }
            },
            "metal": {
                "title": "การแปรรูปโลหะอย่างมืออาชีพ",
                "description": "สิ่งอำนวยความสะดวกด้านการแปรรูปโลหะครบครัน พร้อมเครื่องกลึง CNC การปั๊ม การเชื่อม และการเคลือบผิว",
                "features": {
                "feature1": "เครื่องกลึง CNC",
                "feature2": "การปั๊มโลหะ",
                "feature3": "การเชื่อม",
                "feature4": "การเคลือบผิว"
                }
            },
            "wood": {
                "title": "การแปรรูปไม้แบบมืออาชีพ",
                "description": "โรงงานไม้ที่รวมความเชี่ยวชาญด้านการตัดแผ่น CNC ขั้นสูงและงานฝีมือแบบดั้งเดิม",
                "features": {
                "feature1": "แผ่น CNC",
                "feature2": "การตัดที่แม่นยำ",
                "feature3": "งานฝีมือดั้งเดิม",
                "feature4": "การขัดผิว"
                }
            },
            "service": {
                "title": "บริการครบวงจร",
                "description": "บริการตั้งแต่การออกแบบตัวอย่าง การผลิตจำนวนมาก ไปจนถึงการจัดส่ง",
                "features": {
                "feature1": "ออกแบบ & สร้างต้นแบบ",
                "feature2": "การผลิตจำนวนมาก",
                "feature3": "การตรวจสอบคุณภาพ",
                "feature4": "โลจิสติกส์ & การขนส่ง"
                }
            }
        }
    },
    ja: {
        nav: {
            home: "ホーム",
            about: "会社について",
            capabilities: "製造能力",
            products: "製品",
            services: "サービス",
            certification: "認証",
            quality: "品質",
            contact: "お問い合わせ",
            selectLanguage: "言語を選択",
            closeLanguage: "言語メニューを閉じる",
            consultBtn: "見積もり",
            craft: "技術",
            testing: "品質",
            workplace: "職場",
            whoWeServe: "お客様"
        },
        theme: {
            light: "ライトモードに切り替え",
            dark: "ダークモードに切り替え"
        },
        hero: {
            title: "ベトナムから世界へ<br>家具製造の卓越性",
            subtitle: "トップパフォーマンスベトナム株式会社は、39年の専門知識、最先端技術、包括的なワンストップサービスで、世界クラスのOEM/ODMソリューションを世界のクライアントに提供します。",
            learnMore: "詳細を見る",
            contactUs: "お問い合わせ",
            stats: {
                experience: "年の専門知識",
                employees: "専門スタッフ",
                factory: "㎡の工場",
                locations: "生産拠点"
            }
        },
        vietnamAdvantage: {
            title: "ベトナム製造の優位性",
            subtitle: "{YEAR}年のグローバル貿易における戦略的メリット",
            tariffTitle: "米国関税の優位性",
            tariffContent: "ベトナムは米国との間で優遇関税待遇を享受し、他の多くの国に課せられる追加関税を回避。",
            costTitle: "コスト競争力",
            costContent: "高品質基準を維持しながら労働コストと運営コストを削減し、投資に対して優れた価値を提供。",
            supplyTitle: "強力なサプライチェーン",
            supplyContent: "包括的なサプライチェーンインフラと効率的なグローバル配送のための戦略的立地。"
        },
        certifications: {
            title: "品質・安全認証",
            subtitle: "グローバル市場向けの包括的な基準適合",
            iso9001: {
                title: "ISO 9001",
                description: "製品品質の一貫性と顧客満足を確保する品質管理システム認証。",
                benefit1: "品質保証",
                benefit2: "顧客満足"
            },
            iso14001: {
                title: "ISO 14001",
                description: "環境責任への取り組みを示す環境管理システム認証。",
                benefit1: "環境保護",
                benefit2: "持続可能な発展"
            },
            cpsia: {
                title: "CPSIA適合",
                description: "米国消費者製品安全改善法に適合し、子供向け製品の安全性を確保。",
                benefit1: "子供の安全",
                benefit2: "米国市場"
            },
            astm: {
                title: "ASTM基準",
                description: "米国材料試験協会の製品安全・品質基準に適合。",
                benefit1: "材料安全",
                benefit2: "国際的認知"
            },
            cpsc: {
                title: "CPSC適合",
                description: "米国消費者製品安全委員会の要求に適合し、製品が米国安全基準を満たすことを確保。",
                benefit1: "消費者安全",
                benefit2: "規制遵守"
            }
        },
        environmental: {
            title: "環境の卓越性",
            subtitle: "より良い未来のための持続可能な製造",
            fsc: {
                title: "FSC認証",
                description: "責任ある木材調達と持続可能な森林管理実践を確保する森林管理協議会認証。",
                benefit1: "持続可能な林業",
                benefit2: "責任ある調達"
            },
            carb: {
                title: "CARB適合",
                description: "カリフォルニア大気資源委員会の木製品ホルムアルデヒド放出基準に適合。",
                benefit1: "低ホルムアルデヒド放出",
                benefit2: "大気品質保護"
            },
            greenguard: {
                title: "GREENGUARD認証",
                description: "家庭により健康的な室内環境を作る低化学物質放出認証。",
                benefit1: "健康的な室内環境",
                benefit2: "低化学放出"
            },
            benefits: {
                title: "環境へのメリット",
                description: "当社の環境認証は、より健康的な製品、環境への影響の減少、グローバルな持続可能性要件への適合を確保します。"
            }
        },
        contact: {
            title: "お問い合わせ",
            subtitle: "無料見積もりと専門的なコンサルテーションサービスについてお問い合わせください。",
            cta: {
                title: "設計から量産まで、私たちが実現します",
                lead: "製品要件をお聞かせください。OEM/ODMの最適な提案をいたします。",
                highlight1: "OEM・ODMワンストップ",
                highlight2: "39年以上の製造実績",
                highlight3: "ベトナム生産の優位性",
                emailButton: "growth@topperform.com へメール",
                responseNote: "通常1〜2営業日以内にご返信いたします。",
                socialLabel: "フォローする"
            },
            formTitle: "オンライン見積依頼",
            formSubtitle: "以下のフォームにご記入ください。最適な提案をご返信いたします。",
                phone: {
                title: "電話連絡",
                label: "電話:"
            },
            mobile: {
                label: "携帯電話:"
            },
            japan: {
                label: "日本:"
            },
            china: {
                label: "中国:"
                },
                online: {
                title: "オンライン連絡"
            },
            email: {
                label: "メール:"
            },
            website: {
                label: "ウェブサイト:"
                },
                address: {
                title: "会社住所",
                full: "ベトナム・タイビン省・クインフー県・クインガオ工業クラスター エリアA-CN-2, クインガオコミューン 413760"
            },
            form: {
                name: "担当者名 *",
                email: "連絡先メール *",
                phone: "電話番号",
                company: "会社名",
                website: "会社ウェブサイト",
                message: "メッセージ *",
                submit: "見積を依頼する"
            },
            formErrors: {
                required: "必須項目です。",
                invalidEmail: "有効なメールアドレスを入力してください。",
                whitespace: "空白のみの入力はできません。"
            }
        },
        about: {
            title: "Top Performance Vietnamについて",
            lead: "専門技術の伝承、ベトナムに根ざし、世界にサービス",
            subtitle: "Top Performance Vietnamは2024年設立の台湾唐州企業の完全子会社。親会社の39年以上の家具製造専門知識を活かし、ベトナムタイビン省に7万平方メートルの垂直統合製造拠点に数百万ドルを投資。",
            partner: "私たちは単なる製造業者ではありません—戦略的パートナーです。ベトナムのサプライチェーン優位性と関税メリットを統合し、グローバルクライアントにコスト効率の高い高品質OEM/ODMサービスを提供。",
            capabilities: {
                title: "包括的な能力",
                description: "金属加工ワークショップ、完全自動化塗装生産ライン、CNCパネル加工センター、射出成形設備を含む最先端の設備を装備。"
            },
            quality: {
                title: "品質保証",
                description: "当社の社内研究所は、厳格なテストプロトコルと包括的な認証プログラムを通じて、グローバル基準への準拠を確保します。"
            },
            flexibility: {
                title: "グローバルな柔軟性",
                description: "ベトナムの戦略的優位性と成熟したサプライチェーンエコシステムを活用して、グローバルクライアントに柔軟なカスタマイゼーションサービスを提供。"
            }
        },
        whoWeServe: {
            title: "お客様",
            subtitle: "家具製造の信頼できるOEM/ODMパートナー",
            usBrands: "米国家具ブランド",
            usBrandsDesc: "全米で小売展開する大規模家具ブランド—スケールで品質をお届け。",
            relocation: "生産移転",
            relocationDesc: "米国関税に直面する企業やサプライチェーン多様化を求める企業—ベトナムへの生産移転をスムーズにサポート。",
            global: "グローバルパートナー",
            globalDesc: "ベトナム、中国、日本、韓国の家具メーカー—ODMプロジェクトとキャパシティパートナーシップを歓迎。",
            startups: "スタートアップ＆スケールアップ",
            startupsDesc: "新規ブランドやキャパシティが限られたブランド—当社のODM設計とOEM製造で市場投入を加速。"
        },
        craft: {
            title: "技術と工芸",
            subtitle: "金型開発から最終組立までの完全生産チェーン",
            mold: { title: "金型設計・製造", desc: "DFMとモールドフロー解析、高精度CNC・EDM・ワイヤーカットでミクロン単位の精度を実現。納期30〜60日。" },
            metalPipe: { title: "金属管加工", desc: "CNC切断、3D曲げ、プレス、溶接で丸管・角管・特殊管に対応。14台のプレス機（25〜110トン）と検査システム統合。" },
            sheetMetal: { title: "板金加工", desc: "高精度レーザー切断（±0.1mm）、4/6軸CNC曲げ、複数の溶接方式。炭素鋼・ステンレス・アルミを20mmまで加工。" },
            panel: { title: "パネル加工", desc: "完全パネルライン：CNC切断、エッジバンディング（PUR）、6面穴あけ、MES/ERP連携。パーティクルボード・MDF・TFL・合板対応。" },
            blowMolding: { title: "ブロー成形", desc: "大型押出ブロー成形機で大型中空部品を製造。HDPE/PP素材、プログラム可能な肉厚制御で家具パネルを一体成形。" },
            injection: { title: "射出成形", desc: "120〜1,250トンのサーボ油圧精密射出機。PP・ABS・ナイロン・PC・ガラス繊維対応。金型寿命50万ショット以上。" },
            powderCoating: { title: "粉体塗装", desc: "全長595mの自動ライン、21工程の前処理、スイス製ロボットアームによる均一塗装、粉体回収システム、24時間生産対応。" },
            assembly: { title: "組立・QC", desc: "金属・プラスチック・パネルを統合する3本の半自動組立ライン。SOPに基づくワークステーションとインライン・最終品質検査。" }
        },
        testing: {
            title: "厳格な検証",
            subtitle: "品質への約束：国際基準と先進検査で製品品質を守る",
            lead: "当社は独立した社内研究所を運営し、材料分析から製品寿命試験まで包括的な検査を実施。原料から出荷までの全工程が世界で最も厳格な安全・品質基準を満たすことを確保。"
        },
        workplace: {
            title: "働きやすい職場環境",
            subtitle: "Top Performance Vietnamでは、チームを単なる従業員ではなく、家族の一員として捉えています。",
            lead: "自宅と同じように快適で自分らしくいられる、リラックスした歓迎の雰囲気を作るよう努めています。心の平安が良い仕事につながると信じています。",
            compensation: "競争力のある報酬",
            compensationDesc: "あなたの貢献に真に価値を置く給与と福利厚生を提供。",
            workLife: "ワークライフバランス",
            workLifeDesc: "合理的な労働時間で個人の時間を尊重。",
            ethics: "倫理基準",
            ethicsDesc: "強制労働を決して許さない厳格な国際労働法の遵守。"
        },
        productTypes: {
            title: "製品カテゴリー",
            subtitle: "教育、商用、産業向けソリューション—OEM・ODM対応",
            educational: "教育",
            educationalDesc: "生徒用机、椅子、モジュラー机",
            commercial: "商用",
            commercialDesc: "主管用机、高さ調節机、キャビネット、金属棚",
            industrial: "産業・その他",
            industrialDesc: "ブロー成形パレット、磁石クリップ、プラスチック部品、工具"
        },
        products: {
            title: "注目製品",
            subtitle: "製品はオフィス家具、教育研修家具、子供用家具、室内家具、家庭用家具をカバーしています。",
            loading: "製品を読み込んでいます...",
            noProducts: "製品ゾーンを作成中",
            noProductsDesc: "製品表示コンテンツを慎重に準備しています。Top Performance Vietnamの高品質製品をお待ちください。",
            introLine1: "Top Performance Vietnamは、高品質なオフィス家具、教育研修家具、家庭用家具を提供する専門家です。",
            introLine2: "製品はオフィス家具、ストレージキャビネット、子供用家具、さまざまなシリーズをカバーし、クライアントの多様なニーズに対応します。",
            viewDetails: "詳細を見る",
            features: {
                multifunctional: "多機能",
                flexibleDesign: "柔軟な設計",
                safeEcoFriendly: "安全で環境に優しい",
                childSpecific: "子供専用",
                minimalistDesign: "ミニマリストデザイン",
                spaceOptimization: "空間最適化",
                largeCapacity: "大容量",
                officeSpecific: "オフィス専用",
                flexibleApplication: "柔軟な応用"
            },
            details: {
                photos: "商品写真",
                description: "商品説明",
                specifications: "商品仕様",
                width: "幅",
                depth: "奥行き",
                height: "高さ",
                weight: "重量"
            },
            flipTable: {
                title: "フリップテーブル",
                description: "現代のオフィスや教育環境に適した柔軟な多機能フリップテーブル。"
            },
            childWardrobe: {
                title: "子供用白木目調両開きワードローブセット",
                description: "美しくデザインされた実用的で安全かつ環境に優しい子供用ワードローブ。"
            },
            bookshelf: {
                title: "立方体天然木オープン本棚",
                description: "空間利用を向上させるモダンミニマリストデザインの収納本棚。"
            },
            fileCabinet: {
                title: "高白グレー両開き多機能ファイルキャビネット",
                description: "オフィス専用の大容量ファイル収納ソリューション。"
            },
            storageCabinet: {
                title: "多機能収納キャビネット",
                description: "さまざまな空間要件に適した柔軟な収納ソリューション。"
            }
        },
        expo: {
            title: "EDSpaces 2025 に出展します",
            subtitle: "米国 グレーターコロンバス・コンベンションセンター",
            lead: "学校・教育機関向け家具ソリューションを出展いたします。",
            details: {
                dateLabel: "会期",
                dateValue: "2025年11月5日〜7日",
                locationLabel: "会場",
                locationValue: "Greater Columbus Convention Center, Columbus, Ohio, USA",
                boothLabel: "ブース",
                boothValue: "1153"
            },
            cta: "皆さまのご来場、業界パートナーのご訪問を心よりお待ちしております。",
            viewCatalog: "デジタルカタログを見る"
        },
        footer: {
            company: {
                name: "Top Performance Vietnam",
                description: "OEM/ODMワンストップソリューションを提供する専門家具メーカー。"
            },
            links: {
                title: "クイックリンク",
                privacy: "プライバシーポリシー",
                terms: "",
                sitemap: ""
            },
            contact: {
                title: "連絡先",
                phone: "電話:",
                email: "メール:",
                address: "住所:",
                website: "ウェブサイト:",
                location: "ベトナム・タイビン省・クインフー県・クインガオ工業クラスター エリアA-CN-2, クインガオコミューン 413760"
            },
            services: {
                title: "サービス",
                metalProcessing: "金属加工",
                injectionMolding: "射出成形",
                powderCoating: "粉体塗装",
                moldManufacturing: "金型製造",
                woodProcessing: "木材加工",
                oneStopService: "ワンストップサービス"
            },
            copyright: "© {YEAR} Top Performance Vietnam Co., Ltd. 全ての権利を保有"
        },
        privacy: {
            content: "当社はクロスサイトトラッキング、行動分析、リマーケティングを行いません。不必要なCookieも使用しません。フォームで送信された情報は、お問い合わせへの返信目的にのみ使用し、第三者と共有しません。"
        },
        notifications: {
            sending: "送信中...",
            success: "メッセージが送信されました。追ってご連絡いたします。",
            missingRequired: "必須項目を入力してください。",
            failed: "送信に失敗しました。後でもう一度お試しください。またはメールでお問い合わせください。",
            quotaExceeded: "今月の送信上限に達しました。メールでご連絡ください。",
            captchaRequired: "認証を完了してください。"
        },
        chat: {
            placeholder: "メッセージを入力...",
            welcome: "こんにちは、Nancyです。家具製造に関するご要望について、どのようにお手伝いできますか？"
        },
        capabilities: {
            title: "包括的な製造能力",
            subtitle: "完全なワンストップ生産ソリューション",
            plastic: {
                title: "先進プラスチック加工",
                description: "精密プラスチック部品のための最先端3Dプリンティング、CNC加工、射出成形、ブロー成形能力。",
                features: {
                    feature1: "3Dプリンティング",
                    feature2: "CNC切削", 
                    feature3: "射出成形",
                    feature4: "ブロー成形"
                }
            },
            metal: {
                title: "専門金属加工",
                description: "専門CNC旋盤、プレス、溶接、表面処理能力を備えた完全な金属加工設備。",
                features: {
                    feature1: "CNC旋盤",
                    feature2: "金属プレス",
                    feature3: "専門溶接", 
                    feature4: "表面処理"
                }
            },
            wood: {
                title: "専門木材加工",
                description: "先進CNCパネル加工と伝統工芸の専門知識を持つ総合木工設備。",
                features: {
                    feature1: "CNCパネル",
                    feature2: "精密切削",
                    feature3: "伝統工芸", 
                    feature4: "表面仕上げ"
                }
            },
            service: {
                title: "ワンストップサービス",
                description: "設計サンプリングから量産、出荷まで完全なエンドツーエンドサービス。",
                features: {
                    feature1: "設計&サンプリング",
                    feature2: "量産",
                    feature3: "品質検査",
                    feature4: "物流&出荷"
                }
            }
        }
    },
    ko: {
        nav: {
            home: "홈",
            about: "회사소개",
            capabilities: "제조 능력",
            products: "제품",
            services: "서비스",
            certification: "인증",
            quality: "품질",
            contact: "문의",
            selectLanguage: "언어 선택",
            closeLanguage: "언어 메뉴 닫기",
            consultBtn: "견적 문의",
            craft: "기술",
            testing: "품질",
            workplace: "직장",
            whoWeServe: "고객"
        },
        theme: {
            light: "라이트 모드로 전환",
            dark: "다크 모드로 전환"
        },
        hero: {
            title: "베트남에서 세계로<br>가구 제조의 우수성",
            subtitle: "Top Performance Vietnam Co., Ltd.는 39년의 전문성, 최첨단 기술, 포괄적인 원스톱 서비스로 글로벌 고객에게 세계 수준의 OEM/ODM 솔루션을 제공합니다.",
            learnMore: "자세히 보기",
            contactUs: "문의하기",
            stats: {
                experience: "년의 전문성",
                employees: "전문 직원",
                factory: "㎡ 공장",
                locations: "생산 기지"
            }
        },
        vietnamAdvantage: {
            title: "베트남 제조 우위",
            subtitle: "{YEAR}년 글로벌 무역의 전략적 이익",
            tariffTitle: "미국 관세 우위",
            tariffContent: "베트남은 미국과의 우대 관세 대우를 누리며, 많은 다른 국가에 부과되는 추가 관세를 회피.",
            costTitle: "비용 경쟁력",
            costContent: "높은 품질 기준을 유지하면서 인건비와 운영비를 절감하여 투자에 대한 뛰어난 가치를 제공.",
            supplyTitle: "강력한 공급망",
            supplyContent: "포괄적인 공급망 인프라와 효율적인 글로벌 유통을 위한 전략적 위치."
        },
        certifications: {
            title: "품질 및 안전 인증",
            subtitle: "글로벌 시장을 위한 포괄적인 표준 준수",
            iso9001: {
                title: "ISO 9001",
                description: "제품 품질 일관성과 고객 만족을 보장하는 품질 관리 시스템 인증.",
                benefit1: "품질 보증",
                benefit2: "고객 만족"
            },
            iso14001: {
                title: "ISO 14001",
                description: "환경 책임에 대한 우리의 약속을 보여주는 환경 관리 시스템 인증.",
                benefit1: "환경 보호",
                benefit2: "지속 가능한 발전"
            },
            cpsia: {
                title: "CPSIA 준수",
                description: "미국 소비자 제품 안전 개선법을 준수하여 어린이 제품 안전을 보장.",
                benefit1: "아동 안전",
                benefit2: "미국 시장"
            },
            astm: {
                title: "ASTM 표준",
                description: "미국 재료 시험 협회의 제품 안전 및 품질 표준을 준수.",
                benefit1: "재료 안전",
                benefit2: "국제적 인정"
            },
            cpsc: {
                title: "CPSC 준수",
                description: "미국 소비자 제품 안전 위원회 요구 사항을 준수하여 제품이 미국 안전 표준을 충족하도록 보장.",
                benefit1: "소비자 안전",
                benefit2: "규정 준수"
            }
        },
        environmental: {
            title: "환경 우수성",
            subtitle: "더 나은 미래를 위한 지속 가능한 제조",
            fsc: {
                title: "FSC 인증",
                description: "책임감 있는 목재 조달과 지속 가능한 산림 관리 관행을 보장하는 산림 관리 협의회 인증.",
                benefit1: "지속 가능한 임업",
                benefit2: "책임감 있는 조달"
            },
            carb: {
                title: "CARB 준수",
                description: "캘리포니아 대기 자원 위원회 목제품 포름알데하이드 배출 기준을 준수.",
                benefit1: "낮은 포름알데하이드 배출",
                benefit2: "대기 품질 보호"
            },
            greenguard: {
                title: "GREENGUARD 인증",
                description: "가정을 위한 더 건강한 실내 환경을 조성하는 낮은 화학 물질 배출 인증.",
                benefit1: "건강한 실내 환경",
                benefit2: "낮은 화학 배출"
            },
            benefits: {
                title: "환경적 이점",
                description: "우리의 환경 인증은 더 건강한 제품, 환경 영향 감소, 글로벌 지속가능성 요구사항 준수를 보장합니다."
            }
        },
        contact: {
            title: "문의",
            subtitle: "무료 견적 및 전문 컨설팅 서비스에 대해 문의하십시오.",
            cta: {
                title: "설계부터 양산까지, 저희가 실현해 드립니다",
                lead: "제품 요구사항을 알려주시면 맞춤형 OEM/ODM 제안을 드립니다.",
                highlight1: "OEM & ODM 원스톱",
                highlight2: "39년 이상의 제조 노하우",
                highlight3: "베트남 생산 경쟁력",
                emailButton: "growth@topperform.com 이메일",
                responseNote: "보통 1–2 영업일 내에 답변드립니다.",
                socialLabel: "팔로우하기"
            },
            formTitle: "온라인 견적 문의",
            formSubtitle: "아래 정보를 입력해 주시면 맞춤 제안으로 답변드리겠습니다.",
            phone: {
                title: "전화 연락",
                label: "전화:"
            },
            mobile: {
                label: "휴대폰:"
            },
            japan: {
                label: "일본:"
            },
            china: {
                label: "중국:"
            },
            online: {
                title: "온라인 연락"
            },
            email: {
                label: "이메일:"
            },
            website: {
                label: "웹사이트:"
            },
            address: {
                title: "회사 주소",
                full: "베트남 타이빈성 퀸푸군 퀸지아오 공업클러스터 A-CN-2 구역, 퀸지아오코뮌 413760"
            },
            form: {
                name: "담당자 *",
                email: "연락 이메일 *",
                phone: "연락 전화",
                company: "회사명",
                website: "회사 웹사이트",
                message: "문의 내용 *",
                submit: "견적 문의 보내기"
            },
            formErrors: {
                required: "필수 입력 항목입니다.",
                invalidEmail: "유효한 이메일 주소를 입력해 주세요.",
                whitespace: "공백만 입력할 수 없습니다."
            }
        },
        about: {
            title: "Top Performance Vietnam 소개",
            lead: "전문 지식의 유산, 베트남에 뿌리를 두고 세계에 서비스",
            subtitle: "Top Performance Vietnam은 2024년 설립된 대만 Tang Zhou Enterprise의 완전 자회사입니다. 모회사의 39년 이상 가구 제조 전문 지식을 바탕으로 베트남 타이빈성에 70,000㎡ 규모의 수직 통합 제조 기지에 수백만 달러를 투자했습니다.",
            partner: "우리는 단순한 제조업체가 아닙니다—전략적 파트너입니다. 베트남의 공급망 이점과 관세 혜택을 통합하여 글로벌 고객에게 비용 효율적이고 고품질의 OEM/ODM 서비스를 제공합니다.",
                capabilities: {
                title: "포괄적인 역량",
                description: "금속 가공 작업장, 완전 자동화된 도장 생산 라인, CNC 패널 가공 센터 및 사출 성형 장비를 포함한 최첨단 시설을 갖추고 있습니다."
                },
                quality: {
                title: "품질 보증",
                description: "사내 실험실은 엄격한 테스트 프로토콜과 포괄적인 인증 프로그램을 통해 글로벌 표준 준수를 보장합니다."
            },
            flexibility: {
                title: "글로벌 유연성",
                description: "베트남의 전략적 이점과 성숙한 공급망 생태계를 활용하여 전 세계 고객을 위한 유연한 맞춤형 서비스를 제공합니다."
            }
        },
        whoWeServe: {
            title: "고객",
            subtitle: "가구 제조의 신뢰할 수 있는 OEM/ODM 파트너",
            usBrands: "미국 가구 브랜드",
            usBrandsDesc: "전국 소매 존재를 가진 미국 시장의 대형 가구 브랜드—규모에 맞는 품질을 제공합니다.",
            relocation: "생산 이전",
            relocationDesc: "미국 관세에 직면하거나 공급망 다각화를 원하는 기업—베트남으로의 생산 이전을 원활하게 지원합니다.",
            global: "글로벌 파트너",
            globalDesc: "베트남, 중국, 일본, 한국 가구 제조업체—ODM 프로젝트와 생산 능력 파트너십을 환영합니다.",
            startups: "스타트업 및 스케일업",
            startupsDesc: "신규 브랜드 또는 생산 능력이 제한된 브랜드—당사의 ODM 설계와 OEM 제조로 시장 진입을 가속화합니다."
        },
        craft: {
            title: "기술과 공예",
            subtitle: "금형 개발부터 최종 조립까지 전체 생산 체인",
            mold: { title: "금형 설계 및 제조", desc: "DFM 및 금형 흐름 분석, 고정밀 CNC·EDM·와이어 커팅으로 마이크로미터 수준 정밀도 달성. 납기 30~60일." },
            metalPipe: { title: "금속 관 가공", desc: "CNC 절단, 3D 벤딩, 프레스, 용접으로 원형·사각·맞춤 파이프 가공. 14대 프레스(25~110톤) 및 통합 검사 시스템." },
            sheetMetal: { title: "판금 가공", desc: "고정밀 레이저 절단(±0.1mm), 4/6축 CNC 벤딩, 다양한 용접 방식. 탄소강·스테인리스·알루미늄 20mm까지 가공." },
            panel: { title: "패널 가공", desc: "완전 패널 라인: CNC 절단, 엣지밴딩(PUR), 6면 드릴링, MES/ERP 통합. 파티클보드·MDF·TFL·합판 지원." },
            blowMolding: { title: "블로우 성형", desc: "대형 압출 블로우 성형기로 대형 중공 부품 제조. HDPE/PP 재료, 프로그래밍 가능한 벽 두께로 가구 패널 일체 성형." },
            injection: { title: "사출 성형", desc: "120~1,250톤 서보 유압 정밀 사출기. PP·ABS·나일론·PC·유리섬유 가공. 금형 수명 50만 샷 이상." },
            powderCoating: { title: "분체 도장", desc: "595m 자동 라인, 21단계 전처리, 스위스 로봇 암 균일 도장, 분체 회수 시스템, 24/7 생산 가능." },
            assembly: { title: "조립 및 QC", desc: "금속·플라스틱·패널을 통합하는 3개 반자동 조립 라인. SOP 기반 워크스테이션과 인라인·최종 품질 검사." }
        },
        testing: {
            title: "엄격한 검증",
            subtitle: "품질 약속: 국제 표준과 첨단 검사로 제품 품질을 보호",
            lead: "우리는 원재료 분석부터 제품 수명 주기 테스트까지 포괄적인 검사를 갖춘 독립적인 사내 실험실을 운영하며, 원재료부터 출고까지의 모든 단계가 세계에서 가장 엄격한 안전 및 품질 기준을 충족하도록 보장합니다."
        },
        workplace: {
            title: "직장 친화적 환경",
            subtitle: "Top Performance Vietnam에서는 팀을 단순한 직원이 아닌 확장된 가족으로 봅니다.",
            lead: "집에서처럼 편안하고 진정한 자신으로 느낄 수 있는 편안하고 환영하는 분위기를 만들기 위해 노력합니다. 마음의 평화가 훌륭한 작업으로 이어진다고 믿습니다.",
            compensation: "경쟁력 있는 보상",
            compensationDesc: "귀하의 기여에 진정으로 가치를 두는 급여와 복리후생을 제공합니다.",
            workLife: "워라밸",
            workLifeDesc: "합리적인 근무 시간으로 개인 시간을 존중합니다.",
            ethics: "윤리 기준",
            ethicsDesc: "강제 노동에 대한 제로 관용으로 엄격한 국제 노동법을 준수합니다."
        },
        productTypes: {
            title: "제품 카테고리",
            subtitle: "교육, 상업, 산업 솔루션—OEM 및 ODM 준비",
            educational: "교육",
            educationalDesc: "학생용 책상, 의자, 모듈형 책상",
            commercial: "상업",
            commercialDesc: "관리자 책상, 높이 조절 책상, 캐비닛, 금속 선반",
            industrial: "산업 및 기타",
            industrialDesc: "블로우 성형 팔레트, 자석 클립, 플라스틱 부품, 도구"
        },
        products: {
            title: "주요 제품",
            subtitle: "제품은 사무용 가구, 교육 연수 가구, 아동용 가구, 실내 가구 및 가정용 가구를 포함합니다.",
            loading: "제품을 불러오는 중...",
            noProducts: "제품 영역을 만드는 중",
            noProductsDesc: "제품 표시 콘텐츠를 신중하게 준비하고 있습니다. Top Performance Vietnam의 고품질 제품을 기다려주세요.",
            introLine1: "Top Performance Vietnam은 고품질의 사무용 가구, 교육 연수 가구 및 가정용 가구를 제공하는 전문가입니다.",
            introLine2: "제품은 사무용 가구, 저장 캐비닛, 아동용 가구 및 다양한 시리즈를 포함하여 고객의 다양한 요구를 충족하는 것을 목표로 합니다.",
            viewDetails: "자세히 보기",
            features: {
                multifunctional: "다기능",
                flexibleDesign: "유연한 디자인",
                safeEcoFriendly: "안전하고 친환경적",
                childSpecific: "아동 전용",
                minimalistDesign: "미니멀리스트 디자인",
                spaceOptimization: "공간 최적화",
                largeCapacity: "대용량",
                officeSpecific: "사무실 전용",
                flexibleApplication: "유연한 적용"
            },
            details: {
                photos: "제품 사진",
                description: "제품 설명",
                specifications: "제품 사양",
                width: "폭",
                depth: "깊이",
                height: "높이",
                weight: "무게"
            },
            flipTable: {
                title: "플립 테이블",
                description: "현대적인 사무실과 교육 환경에 적합한 유연한 다기능 플립 테이블."
            },
            childWardrobe: {
                title: "아동용 화이트 우드 그레인 양문 옷장 세트",
                description: "아름답게 디자인된 실용적이고 안전하며 친환경적인 아동용 옷장."
            },
            bookshelf: {
                title: "정육면체 천연목 오픈 책장",
                description: "공간 활용을 향상시키는 모던 미니멀리스트 디자인 수납 책장."
            },
            fileCabinet: {
                title: "하이 화이트 그레이 양문 다기능 파일 캐비닛",
                description: "사무실 전용 대용량 파일 저장 솔루션."
            },
            storageCabinet: {
                title: "다기능 수납 캐비닛",
                description: "다양한 공간 요구사항에 적합한 유연한 수납 솔루션."
            }
        },
        expo: {
            title: "EDSpaces 2025에서 만나요",
            subtitle: "미국 그레이터 콜럼버스 컨벤션 센터",
            lead: "학교 및 교육 단체를 위한 가구 솔루션을 전시합니다.",
            details: {
                dateLabel: "기간",
                dateValue: "2025년 11월 5일~7일",
                locationLabel: "장소",
                locationValue: "Greater Columbus Convention Center, Columbus, Ohio, USA",
                boothLabel: "부스",
                boothValue: "1153"
            },
            cta: "방문객 및 관련 업계 파트너 여러분의 방문을 환영합니다.",
            viewCatalog: "디지털 카탈로그 보기"
        },
        footer: {
            company: {
                name: "Top Performance Vietnam",
                description: "OEM/ODM 원스톱 솔루션을 제공하는 전문 가구 제조업체로, 글로벌 가구 조달의 선호 파트너가 되는 것을 약속합니다."
            },
            links: {
                title: "빠른 링크",
                privacy: "개인정보처리방침",
                terms: "",
                sitemap: ""
            },
            contact: {
                title: "연락처 정보",
                phone: "전화:",
                email: "이메일:",
                address: "주소:",
                website: "웹사이트:",
                location: "베트남 타이빈성 퀸푸군 퀸지아오 공업클러스터 A-CN-2 구역, 퀸지아오코뮌 413760"
            },
        services: {
                title: "서비스",
                metalProcessing: "금속 가공",
                injectionMolding: "사출 성형",
                powderCoating: "파우더 코팅",
                moldManufacturing: "몰드 제조",
                woodProcessing: "목재 가공",
                oneStopService: "원스톱 서비스"
            },
            copyright: "© {YEAR} Top Performance Vietnam Co., Ltd. 모든 권리 보유"
        },
        privacy: {
            content: "저희는 교차 사이트 추적, 행동 분석 또는 리마케팅을 수행하지 않으며, 불필요한 쿠키를 사용하지 않습니다. 양식으로 제출된 정보는 문의에 응답하기 위한 용도로만 사용되며 제3자와 공유하지 않습니다."
        },
        notifications: {
            sending: "전송 중...",
            success: "메시지가 전송되었습니다. 곧 연락드리겠습니다.",
            missingRequired: "필수 항목을 모두 입력해 주세요.",
            failed: "전송에 실패했습니다. 나중에 다시 시도하시거나 이메일로 문의해 주세요.",
            quotaExceeded: "이번 달 전송 한도에 도달했습니다. 이메일로 연락해 주세요.",
            captchaRequired: "인증을 완료해 주세요."
        },
        chat: {
            placeholder: "메시지를 입력하세요...",
            welcome: "안녕하세요, Nancy입니다. 가구 제조 관련해서 무엇을 도와드릴까요?"
        },
        capabilities: {
            title: "포괄적인 제조 능력",
            subtitle: "완전한 원스톱 생산 솔루션",
            plastic: {
                title: "첨단 플라스틱 가공",
                description: "정밀 플라스틱 부품을 위한 최첨단 3D 프린팅, CNC 가공, 사출 성형, 블로우 성형 능력.",
                features: {
                    feature1: "3D 프린팅",
                    feature2: "CNC 절단", 
                    feature3: "사출 성형",
                    feature4: "블로우 성형"
                }
            },
            metal: {
                title: "전문 금속 가공",
                description: "전문 CNC 선반, 스탬핑, 용접 및 표면 처리 능력을 갖춘 완전한 금속 가공 시설.",
                features: {
                    feature1: "CNC 선반",
                    feature2: "금속 스탬핑",
                    feature3: "전문 용접", 
                    feature4: "표면 처리"
                }
            },
            wood: {
                title: "전문 목재 가공",
                description: "첨단 CNC 패널 가공과 전통 공예 전문 지식을 갖춘 종합 목공 시설.",
                features: {
                    feature1: "CNC 패널",
                    feature2: "정밀 절단",
                    feature3: "전통 장인정신", 
                    feature4: "표면 마감"
                }
            },
            service: {
                title: "원스톱 서비스",
                description: "디자인 샘플링부터 대량 생산 및 배송까지 완전한 엔드투엔드 서비스.",
                features: {
                    feature1: "디자인 & 샘플링",
                    feature2: "대량 생산",
                    feature3: "품질 검사",
                    feature4: "물류 & 배송"
                }
            }
        }
    },
    "zh-CN": {
        nav: {
            home: "首页",
            about: "关于我们",
            capabilities: "制造能力",
            products: "产品",
            services: "服务",
            certification: "认证",
            quality: "品质",
            contact: "联系我们",
            selectLanguage: "选择语言",
            closeLanguage: "关闭语言菜单",
            consultBtn: "获取报价",
            craft: "工艺",
            testing: "质量",
            workplace: "职场",
            whoWeServe: "客户"
        },
        theme: {
            light: "切换到浅色模式",
            dark: "切换到深色模式"
        },
        hero: {
            title: "越南制造<br>引领家具卓越品质",
            subtitle: "Top Performance Vietnam Co., Ltd. 凭借39年专业经验、尖端技术和全面一站式服务，为全球客户提供世界级的OEM/ODM解决方案。",
            learnMore: "了解更多",
            contactUs: "联系我们",
            stats: {
                experience: "年专业经验",
                employees: "专业员工",
                factory: "平方米工厂",
                locations: "生产基地"
            }
        },
        vietnamAdvantage: {
            title: "越南制造优势",
            subtitle: "{YEAR}年全球贸易的战略优势",
            tariffTitle: "美国关税优势",
            tariffContent: "越南享受对美优惠关税待遇，避免了对许多其他国家征收的额外关税。",
            costTitle: "成本竞争力",
            costContent: "在保持高质量标准的同时降低人工和运营成本，为您的投资提供卓越价值。",
            supplyTitle: "强大供应链",
            supplyContent: "完善的供应链基础设施和高效全球分销的战略位置。"
        },
        certifications: {
            title: "质量安全认证",
            subtitle: "面向全球市场的全面标准合规",
            iso9001: {
                title: "ISO 9001",
                description: "质量管理体系认证，确保产品质量一致性和客户满意度。",
                benefit1: "质量保证",
                benefit2: "客户满意"
            },
            iso14001: {
                title: "ISO 14001",
                description: "环境管理体系认证，展示我们对环境责任的承诺。",
                benefit1: "环境保护",
                benefit2: "可持续发展"
            },
            cpsia: {
                title: "CPSIA合规",
                description: "符合美国消费品安全改进法案，确保儿童产品安全。",
                benefit1: "儿童安全",
                benefit2: "美国市场"
            },
            astm: {
                title: "ASTM标准",
                description: "符合美国材料试验协会产品安全和质量标准。",
                benefit1: "材料安全",
                benefit2: "国际认可"
            },
            cpsc: {
                title: "CPSC合规",
                description: "符合美国消费品安全委员会要求，确保产品满足美国安全标准。",
                benefit1: "消费安全",
                benefit2: "法规遵循"
            }
        },
        environmental: {
            title: "环保卓越",
            subtitle: "为更美好未来而进行的可持续制造",
            fsc: {
                title: "FSC认证",
                description: "森林管理委员会认证，确保负责任的木材采购和可持续森林管理实践。",
                benefit1: "可持续林业",
                benefit2: "负责任采购"
            },
            carb: {
                title: "CARB合规",
                description: "符合加州空气资源委员会木制品甲醛排放标准。",
                benefit1: "低甲醛排放",
                benefit2: "空气质量保护"
            },
            greenguard: {
                title: "GREENGUARD认证",
                description: "低化学物质排放认证，为家庭创造更健康的室内环境。",
                benefit1: "健康室内环境",
                benefit2: "低化学排放"
            },
            benefits: {
                title: "环境效益",
                description: "我们的环境认证确保更健康的产品、减少环境影响，并符合全球可持续发展要求。"
            }
        },
        contact: {
            title: "联系我们",
            subtitle: "联系我们获取免费报价和专业咨询服务。",
            cta: {
                title: "从设计到量产，我们为您实践",
                lead: "分享您的产品需求，我们的团队将提供量身定制的 OEM/ODM 方案。",
                highlight1: "OEM & ODM 一站式",
                highlight2: "39年以上制造经验",
                highlight3: "越南生产优势",
                emailButton: "发送邮件至 growth@topperform.com",
                responseNote: "我们通常会在1–2个工作日内回复。",
                socialLabel: "关注我们"
            },
            formTitle: "在线询价",
            formSubtitle: "填写以下信息，我们将尽快为您提供专属报价与方案。",
            phone: {
                title: "电话联系",
                label: "电话:"
            },
            mobile: {
                label: "手机:"
            },
            japan: {
                label: "日本:"
            },
            china: {
                label: "中国:"
            },
            online: {
                title: "在线联系"
            },
            email: {
                label: "邮箱:"
            },
            website: {
                label: "网站:"
            },
            address: {
                title: "公司地址",
                full: "越南太平省琼附县琼教乡琼教工业区-区域A-CN-2, 413760"
            },
            form: {
                name: "联系人 *",
                email: "联系邮箱 *",
                phone: "联系电话",
                company: "公司名称",
                website: "公司网站",
                message: "留言内容 *",
                submit: "提交询价"
            },
            formErrors: {
                required: "此字段为必填项。",
                invalidEmail: "请输入有效的邮箱地址。",
                whitespace: "不能仅填写空白字符。"
            }
        },
        about: {
            title: "关于Top Performance Vietnam",
            lead: "传承专业，立足越南，放眼全球",
            subtitle: "Top Performance Vietnam成立于2024年，是台湾唐洲企业的全资子公司。我们凭借母公司超过39年的家具制造经验，在越南太平省投资千万美元，建立了70,000平方米的垂直整合制造基地。",
            partner: "我们不仅仅是制造商，更是客户的战略伙伴。通过整合越南在地的供应链优势与关税利益，我们为全球客户提供兼具成本效益与高品质的OEM/ODM服务。",
            capabilities: {
                title: "综合能力",
                description: "配备最先进的设施，包括金属加工车间、全自动化喷涂生产线、CNC板材加工中心和注塑成型设备。"
            },
            quality: {
                title: "质量保证",
                description: "我们的内部实验室通过严格的测试协议和全面的认证计划确保符合全球标准。"
            },
            flexibility: {
                title: "全球灵活性",
                description: "利用越南的战略优势和成熟的供应链生态系统，为全球客户提供灵活的定制化服务。"
            }
        },
        whoWeServe: {
            title: "服务对象",
            subtitle: "您值得信赖的家具OEM/ODM制造伙伴",
            usBrands: "美国家具品牌",
            usBrandsDesc: "美国市场中拥有全美零售网点的大型家具品牌—我们提供规模化优质交付。",
            relocation: "产线转移",
            relocationDesc: "面临美国关税或寻求供应链多元化的企业—我们协助您顺利将生产转移至越南。",
            global: "全球伙伴",
            globalDesc: "越南、中国、日本、韩国家具商—我们欢迎ODM项目与产能合作。",
            startups: "新创与成长品牌",
            startupsDesc: "新品牌或产能不足的品牌—我们的ODM设计与OEM制造助您快速上市。"
        },
        craft: {
            title: "工艺与技术",
            subtitle: "从模具开发到成品组装的完整生产链",
            mold: { title: "模具设计与制造", desc: "结构化DFM与模流分析，高精密CNC、EDM、线切割达微米级精度。交期30–60天。" },
            metalPipe: { title: "金属管材加工", desc: "先进CNC切割、3D弯管、冲压及焊接，支持圆管、方管和异型管。14台冲压机（25–110吨）配备集成检测。" },
            sheetMetal: { title: "钣金加工", desc: "高精度激光切割（±0.1mm）、4/6轴CNC折弯及多种焊接方式。加工碳钢、不锈钢、铝材至20mm。" },
            panel: { title: "板材加工", desc: "完整板材产线：CNC裁切、封边（PUR）、六面钻孔，MES/ERP集成。支持刨花板、MDF、TFL及胶合板。" },
            blowMolding: { title: "吹塑成型", desc: "大吨位挤出吹塑机生产超大型中空部件。HDPE/PP材料，可编程壁厚控制，一体成型大尺寸家具面板。" },
            injection: { title: "注塑成型", desc: "120至1,250吨伺服液压精密注塑机。加工PP、ABS、尼龙、PC及玻纤复合材料。模具寿命超50万模次。" },
            powderCoating: { title: "粉末涂装", desc: "595米自动化产线，21道前处理工序，瑞士机械臂均匀喷涂，粉末回收系统，24小时不间断生产。" },
            assembly: { title: "组装与品检", desc: "三条半自动装配线整合金属、塑料和板材组件。SOP指导工位配合在线检验与最终品质检查。" }
        },
        testing: {
            title: "严格测试",
            subtitle: "品质承诺：以国际标准与先进检测为您的产品品质护航",
            lead: "我们设立了独立的内部实验室，配备从材料分析到成品寿命测试的完整设备，确保从原料到出货的每一个环节都符合全球市场最严苛的安全与品质标准。"
        },
        workplace: {
            title: "职场友善环境",
            subtitle: "在Top Performance Vietnam，我们将团队视为家人，而不仅是员工。",
            lead: "我们努力营造轻松、温馨的氛围，让您能像在家一样舒适、真实。我们相信，心安才能造就好作品。",
            compensation: "有竞争力的薪酬",
            compensationDesc: "提供真正尊重您贡献的薪资与福利。",
            workLife: "工作与生活平衡",
            workLifeDesc: "以合理工时尊重您的个人时间。",
            ethics: "伦理标准",
            ethicsDesc: "严守国际劳工法，绝不容忍强迫劳动。"
        },
        productTypes: {
            title: "制品类型",
            subtitle: "教育、商用、工业方案—OEM与ODM就绪",
            educational: "教育用品",
            educationalDesc: "学生桌、学生椅、拼接桌",
            commercial: "商业制品",
            commercialDesc: "主管桌、升降桌、置物柜、金属架",
            industrial: "工业及其他",
            industrialDesc: "吹塑栈板、磁吸塑料夹、各类工具"
        },
        products: {
            title: "精选产品",
            subtitle: "产品涵盖办公家具、教育培训家具、儿童家具、室内家具和家居用品。",
            loading: "正在加载产品...",
            noProducts: "产品区域正在构建",
            noProductsDesc: "我们正在仔细准备产品展示内容。请等待Top Performance Vietnam的高质量产品。",
            introLine1: "Top Performance Vietnam是提供高质量办公家具、教育培训家具和家庭家具的专家。",
            introLine2: "我们的产品涵盖办公家具、存储柜、儿童家具和各种系列，以满足客户的不同需求。",
            viewDetails: "查看详情",
            features: {
                multifunctional: "多功能",
                flexibleDesign: "灵活设计",
                safeEcoFriendly: "安全环保",
                childSpecific: "儿童专用",
                minimalistDesign: "极简设计",
                spaceOptimization: "空间优化",
                largeCapacity: "大容量",
                officeSpecific: "办公专用",
                flexibleApplication: "灵活应用"
            },
            details: {
                photos: "产品照片",
                description: "产品介绍",
                specifications: "产品规格",
                width: "宽度",
                depth: "深度",
                height: "高度",
                weight: "重量"
            },
                flipTable: {
                title: "翻转桌",
                description: "适合现代办公和教育环境的灵活多功能翻转桌。"
            },
            childWardrobe: {
                title: "儿童白色木纹双门衣柜套装",
                description: "设计精美、实用、安全且环保的儿童衣柜。"
                },
                bookshelf: {
                title: "立方体天然木开放式书架",
                description: "提升空间利用率的现代简约设计收纳书架。"
            },
            fileCabinet: {
                title: "高白灰双门多功能文件柜",
                description: "办公专用大容量文件存储解决方案。"
            },
            storageCabinet: {
                title: "多功能收纳柜",
                description: "适合各种空间需求的灵活收纳解决方案。"
            }
        },
        expo: {
            title: "参展 EDSpaces 2025",
            subtitle: "美国 哥伦布大会议展中心",
            lead: "我们将展示面向学校与教育机构的多种家具解决方案。",
            details: {
                dateLabel: "时间",
                dateValue: "2025年11月5日至7日",
                locationLabel: "地点",
                locationValue: "Greater Columbus Convention Center, Columbus, Ohio, USA",
                boothLabel: "展位",
                boothValue: "1153"
            },
            cta: "诚邀各位访客与行业伙伴莅临参观。",
            viewCatalog: "查看电子型录"
        },
        footer: {
            company: {
                name: "Top Performance Vietnam",
                description: "专业家具制造商，提供OEM/ODM一站式解决方案，致力于成为您的全球家具采购首选合作伙伴。"
            },
            links: {
                title: "快速链接",
                privacy: "隐私政策",
                terms: "",
                sitemap: ""
            },
            contact: {
                title: "联系信息",
                phone: "电话:",
                email: "邮箱:",
                address: "地址:",
                website: "网站:",
                location: "越南太平省琼附县琼教乡琼教工业区-区域A-CN-2, 413760"
            },
            services: {
                title: "服务",
                metalProcessing: "金属加工",
                injectionMolding: "注塑成型",
                powderCoating: "粉末涂装",
                moldManufacturing: "模具制造",
                woodProcessing: "木材加工",
                oneStopService: "一站式服务"
            },
            copyright: "© {YEAR} Top Performance Vietnam Co., Ltd. 保留所有权利"
        },
        privacy: {
            content: "我们不进行跨站跟踪、行为分析或广告再营销，也不使用不必要的 Cookie。表单信息仅用于回复您的询问，不会与第三方共享。"
        },
        notifications: {
            sending: "发送中...",
            success: "信息已成功发送！我们会尽快与您联系。",
            missingRequired: "请完整填写必填字段。",
            failed: "发送失败，请稍后再试或通过邮箱联系我们。",
            quotaExceeded: "本月提交名额已满，请通过邮箱联系我们。",
            captchaRequired: "请完成验证。"
        },
        chat: {
            placeholder: "输入消息...",
            welcome: "您好，我是 Nancy。请问关于家具制造，我如何为您提供协助？"
        },
        capabilities: {
            title: "全面制造能力",
            subtitle: "完整的一站式生产解决方案",
            plastic: {
                title: "先进塑料加工",
                description: "用于精密塑料部件的最先进3D打印、CNC加工、注塑成型和吹塑成型能力。",
                features: {
                    feature1: "3D打印",
                    feature2: "CNC切割", 
                    feature3: "注塑成型",
                    feature4: "吹塑成型"
                }
            },
            metal: {
                title: "专业金属加工",
                description: "配备专业CNC车床、冲压、焊接和表面处理能力的完整金属加工设施。",
                features: {
                    feature1: "CNC车床",
                    feature2: "金属冲压",
                    feature3: "专业焊接", 
                    feature4: "表面处理"
                }
            },
            wood: {
                title: "专业木材加工",
                description: "具有先进CNC板材加工和传统工艺专业知识的综合木工设施。",
                features: {
                    feature1: "CNC面板",
                    feature2: "精密切割",
                    feature3: "传统工艺", 
                    feature4: "表面抛光"
                }
            },
            service: {
                title: "一站式服务",
                description: "从设计打样到批量生产和运输的完整端到端服务。",
                features: {
                    feature1: "设计&打样",
                    feature2: "批量生产",
                    feature3: "质量检测",
                    feature4: "物流&运输"
                }
            }
        }
    },
    "zh-TW": {
        nav: {
            home: "首頁",
            about: "關於我們",
            capabilities: "製造能力",
            products: "產品", 
            services: "服務",
            certification: "認證",
            quality: "品質",
            contact: "聯繫我們",
            selectLanguage: "選擇語言",
            closeLanguage: "關閉語言選單",
            consultBtn: "立即詢價",
            craft: "工藝",
            testing: "品質",
            workplace: "職場",
            whoWeServe: "客戶"
        },
        theme: {
            light: "切換至淺色模式",
            dark: "切換至深色模式"
        },
        hero: {
            title: "越南製造<br>引領家具卓越品質",
            subtitle: "Top Performance Vietnam Co., Ltd. 憑藉39年專業經驗、尖端技術和全面一站式服務，為全球客戶提供世界級的OEM/ODM解決方案。",
            learnMore: "了解更多", 
            contactUs: "聯繫我們",
            stats: {
                experience: "年專業經驗",
                employees: "專業員工",
                factory: "平方米工廠", 
                locations: "生產基地"
            }
        },
        vietnamAdvantage: {
            title: "越南製造優勢",
            subtitle: "{YEAR}年全球貿易的戰略優勢",
            tariffTitle: "美國關稅優勢",
            tariffContent: "越南享受對美優惠關稅待遇，避免了對許多其他國家徵收的額外關稅。",
            costTitle: "成本競爭力",
            costContent: "在保持高品質標準的同時降低人工和營運成本，為您的投資提供卓越價值。",
            supplyTitle: "強大供應鏈",
            supplyContent: "完善的供應鏈基礎設施和高效全球分銷的戰略位置。"
        },
        certifications: {
            title: "品質安全認證",
            subtitle: "面向全球市場的全面標準合規",
            iso9001: {
                title: "ISO 9001",
                description: "品質管理體系認證，確保產品品質一致性和客戶滿意度。",
                benefit1: "品質保證",
                benefit2: "客戶滿意"
            },
            iso14001: {
                title: "ISO 14001",
                description: "環境管理體系認證，展示我們對環境責任的承諾。",
                benefit1: "環境保護",
                benefit2: "可持續發展"
            },
            cpsia: {
                title: "CPSIA合規",
                description: "符合美國市場兒童產品安全改進法案，確保兒童產品安全。",
                benefit1: "兒童安全",
                benefit2: "美國市場"
            },
            astm: {
                title: "ASTM標準",
                description: "符合美國材料試驗協會產品安全和品質標準。",
                benefit1: "材料安全",
                benefit2: "國際認可"
            },
            cpsc: {
                title: "CPSC合規",
                description: "符合美國消費品安全委員會要求，確保產品滿足美國安全標準。",
                benefit1: "消費安全",
                benefit2: "法規遵循"
            }
        },
        environmental: {
            title: "環保卓越",
            subtitle: "為更美好未來而進行的可持續製造",
            fsc: {
                title: "FSC認證",
                description: "森林管理委員會認證，確保負責任的木材採購和可持續森林管理實踐。",
                benefit1: "可持續林業",
                benefit2: "負責任採購"
            },
            carb: {
                title: "CARB合規",
                description: "符合加州空氣資源委員會木製品甲醛排放標準。",
                benefit1: "低甲醛排放",
                benefit2: "空氣品質保護"
            },
            greenguard: {
                title: "GREENGUARD認證",
                description: "低化學物質排放認證，為家庭創造更健康的室內環境。",
                benefit1: "健康室內環境",
                benefit2: "低化學排放"
            },
            benefits: {
                title: "環境效益",
                description: "我們的環境認證確保更健康的產品、減少環境影響，並符合全球可持續發展要求。"
            }
        },
        contact: {
            title: "聯繫我們",
            subtitle: "歡迎聯繫我們獲取免費報價和專業諮詢服務。",
            cta: {
                title: "從設計到量產，我們為您實踐",
                lead: "分享您的產品需求，我們的團隊將提供量身定制的 OEM/ODM 方案。",
                highlight1: "OEM & ODM 一站式",
                highlight2: "39年以上製造經驗",
                highlight3: "越南生產優勢",
                emailButton: "寄信至 growth@topperform.com",
                responseNote: "我們通常會在 1–2 個工作天內回覆。",
                socialLabel: "追蹤我們"
            },
            formTitle: "線上詢價",
            formSubtitle: "填寫以下資訊，我們將盡快為您提供專屬報價與方案。",
                phone: {
                    title: "電話聯繫", 
                label: "電話:"
            },
            mobile: {
                label: "手機:"
            },
            japan: {
                label: "日本:"
            },
            china: {
                label: "中國:"
                },
                online: {
                title: "線上聯繫"
            },
            email: {
                label: "郵箱:"
            },
            website: {
                label: "網站:"
                },
                address: {
                    title: "公司地址",
                full: "越南太平省瓊附縣瓊教鄉瓊教工業區-區域A-CN-2"
            },
            form: {
                name: "聯絡人 *",
                email: "聯絡信箱 *",
                phone: "聯絡電話",
                company: "公司名稱",
                website: "公司網站",
                message: "留言內容 *",
                submit: "送出詢價"
            },
            formErrors: {
                required: "此為必填欄位。",
                invalidEmail: "請輸入有效的電子信箱格式。",
                whitespace: "不可僅填寫空白字元。"
            }
        },
        about: {
            title: "關於Top Performance Vietnam",
            lead: "傳承專業，立足越南，放眼全球",
            subtitle: "Top Performance Vietnam 成立於2024年，是台灣唐洲企業旗下的全資子公司。我們挾帶母公司超過39年的家具製造經驗，在越南太平省投資千萬美元，建立了一座70,000平方米的垂直整合製造基地。",
            partner: "我們不僅僅是製造商，更是客戶的策略夥伴。透過整合越南在地的供應鏈優勢與關稅利益，我們為全球客戶提供兼具成本效益與高品質的OEM/ODM服務。",
            capabilities: {
                title: "綜合能力",
                description: "配備最先進的設施，包括金屬加工車間、全自動化噴塗生產線、CNC板材加工中心和射出成型設備。"
            },
            quality: {
                title: "品質保證",
                description: "我們的內部實驗室通過嚴格的測試協議和全面的認證計劃確保符合全球標準。"
            },
            flexibility: {
                title: "全球靈活性",
                description: "利用越南的戰略優勢和成熟的供應鏈生態系統，為全球客戶提供靈活的客製化服務。"
            }
        },
        whoWeServe: {
            title: "服務對象",
            subtitle: "您值得信賴的家具OEM/ODM製造夥伴",
            usBrands: "美國家具品牌",
            usBrandsDesc: "美國市場中擁有全美零售據點的大型家具品牌—我們提供規模化優質交付。",
            relocation: "產線轉移",
            relocationDesc: "面臨美國關稅或尋求供應鏈多元化的企業—我們協助您順利將生產轉移至越南。",
            global: "全球夥伴",
            globalDesc: "越南、中國、日本、韓國家具商—我們歡迎ODM專案與產能合作。",
            startups: "新創與成長品牌",
            startupsDesc: "新品牌或產能不足的品牌—我們的ODM設計與OEM製造助您快速上市。"
        },
        craft: {
            title: "工藝類型",
            subtitle: "從模具開發到成品組裝的完整生產鏈",
            mold: { title: "模具設計與製造", desc: "結構化DFM與模流分析，高精密CNC、EDM、線切割達微米級精度。交期30–60天。" },
            metalPipe: { title: "金屬管材加工", desc: "先進CNC切割、3D彎管、沖壓及焊接，支援圓管、方管和異型管。14台沖壓機（25–110噸）配備整合式檢測。" },
            sheetMetal: { title: "鈑金加工", desc: "高精度雷射切割（±0.1mm）、4/6軸CNC折彎及多種焊接方式。加工碳鋼、不鏽鋼、鋁材至20mm。" },
            panel: { title: "板材加工", desc: "完整板材產線：CNC裁切、封邊（PUR）、六面鑽孔，MES/ERP整合。支援刨花板、MDF、TFL及合板。" },
            blowMolding: { title: "全尺寸吹塑", desc: "大噸位擠出吹塑機生產超大型中空部件。HDPE/PP材料，可程式化壁厚控制，一體成型大尺寸家具面板。" },
            injection: { title: "全尺寸注塑", desc: "120至1,250噸伺服液壓精密注塑機。加工PP、ABS、尼龍、PC及玻纖複合材料。模具壽命超過50萬模次。" },
            powderCoating: { title: "粉體塗裝", desc: "595公尺自動化產線，21道前處理工序，瑞士機械手臂均勻噴塗，粉末回收系統，24小時不間斷生產。" },
            assembly: { title: "組裝與品檢", desc: "三條半自動組裝線整合金屬、塑膠和板材組件。SOP指導工作站配合在線檢驗與最終品質檢查。" }
        },
        testing: {
            title: "嚴格測試",
            subtitle: "品質承諾：以國際標準與先進檢測為您的產品品質護航",
            lead: "我們設立了獨立的內部實驗室，配備從材料分析到成品壽命測試的完整設備，確保從原料到出貨的每一個環節都符合全球市場最嚴苛的安全與品質標準。"
        },
        workplace: {
            title: "職場友善環境",
            subtitle: "在 Top Performance Vietnam，我們將團隊視為家人，而不僅是員工。",
            lead: "我們努力營造輕鬆、溫馨的氛圍，讓您能像在家一樣舒適、真實。我們相信，心安才能造就好作品。",
            compensation: "有競爭力的薪酬",
            compensationDesc: "提供真正尊重您貢獻的薪資與福利。",
            workLife: "工作與生活平衡",
            workLifeDesc: "以合理工時尊重您的個人時間。",
            ethics: "倫理標準",
            ethicsDesc: "嚴守國際勞工法，絕不容忍強迫勞動。"
        },
        productTypes: {
            title: "製品類型",
            subtitle: "教育、商用、工業方案—OEM與ODM就緒",
            educational: "教育用品",
            educationalDesc: "學生桌、學生椅、拼接桌",
            commercial: "商業製品",
            commercialDesc: "主管桌、升降桌、置物櫃、金屬架",
            industrial: "工業及其他",
            industrialDesc: "吹塑棧板、磁吸塑料夾、各類工具"
        },
        products: {
            title: "精選產品",
            subtitle: "產品涵蓋辦公傢俱、教育培訓傢俱、兒童傢俱、室內傢俱和家居用品。",
            loading: "正在加載產品...",
            noProducts: "產品區域正在構建",
            noProductsDesc: "我們正在仔細準備產品展示內容。請等待Top Performance Vietnam的高質量產品。",
            introLine1: "Top Performance Vietnam是提供高質量辦公家具、教育培訓家具和家庭家具的專家。",
            introLine2: "我們的產品涵蓋辦公家具、存儲櫃、兒童家具和各種系列，以滿足客戶的不同需求。",
            viewDetails: "查看詳情",
            features: {
                multifunctional: "多功能",
                flexibleDesign: "靈活設計",
                safeEcoFriendly: "安全環保",
                childSpecific: "兒童專用",
                minimalistDesign: "極簡設計",
                spaceOptimization: "空間優化",
                largeCapacity: "大容量",
                officeSpecific: "辦公專用",
                flexibleApplication: "靈活應用"
            },
            details: {
                photos: "商品照片",
                description: "商品介紹",
                specifications: "商品規格",
                width: "寬度",
                depth: "深度",
                height: "高度",
                weight: "重量"
            },
            flipTable: {
                title: "翻轉桌",
                description: "適合現代辦公和教育環境的靈活多功能翻轉桌。"
            },
            childWardrobe: {
                title: "兒童白色木紋雙門衣櫃套裝",
                description: "設計精美、實用、安全且環保的兒童衣櫃。"
            },
            bookshelf: {
                title: "立方體天然木開放式書架",
                description: "提升空間利用率的現代簡約設計收納書架。"
            },
            fileCabinet: {
                title: "高白灰雙門多功能文件櫃",
                description: "辦公專用大容量文件儲存解決方案。"
            },
            storageCabinet: {
                title: "多功能收納櫃",
                description: "適合各種空間需求的靈活收納解決方案。"
            }
        },
        expo: {
            title: "EDSpaces 2025 教育用品展",
            subtitle: "美國 哥倫布大會展中心",
            lead: "我們將展出針對學校與教育團體的各式傢俱解決方案。",
            details: {
                dateLabel: "時間",
                dateValue: "2025 年 11 月 5 日至 7 日",
                locationLabel: "地點",
                locationValue: "Greater Columbus Convention Center, Columbus, Ohio, USA",
                boothLabel: "展位",
                boothValue: "1153"
            },
            cta: "歡迎訪客與產業夥伴蒞臨參觀。",
            viewCatalog: "查看電子型錄"
        },
        footer: {
            company: {
                name: "Top Performance Vietnam",
                description: "專業傢俱製造商，提供OEM/ODM一站式解決方案，致力於成為您的全球傢俱採購首選合作夥伴。"
            },
            links: {
                title: "快速連結",
                privacy: "隱私政策",
                terms: "",
                sitemap: ""
            },
            contact: {
                title: "聯繫信息",
                phone: "電話:",
                email: "郵箱:",
                address: "地址:",
                website: "網站:",
                location: "越南太平省瓊附縣瓊教鄉瓊教工業區-區域A-CN-2"
            },
            services: {
                title: "服務",
                metalProcessing: "金屬加工",
                injectionMolding: "射出成型",
                powderCoating: "粉末塗裝", 
                moldManufacturing: "模具製造",
                woodProcessing: "木材加工",
                oneStopService: "一站式服務"
            },
            copyright: "© {YEAR} Top Performance Vietnam Co., Ltd. 保留所有權利"
        },
        privacy: {
            content: "我們不進行任何跨站追蹤、行為分析或廣告再行銷，也不使用不必要的 Cookie。表單資料僅用於回覆您的詢問，不會分享給第三方。"
        },
        notifications: {
            sending: "發送中...",
            success: "訊息已成功發送！我們會盡快與您聯繫。",
            missingRequired: "請完整填寫必填欄位。",
            failed: "送出失敗，請稍後再試或改用 Email 聯繫我們。",
            quotaExceeded: "本月提交名額已滿，請改用 Email 聯繫我們。",
            captchaRequired: "請完成驗證。"
        },
        chat: {
            placeholder: "輸入訊息...",
            welcome: "您好，我是 Nancy。請問關於傢俱製造，我可以如何協助您？"
        },
        capabilities: {
            title: "全面製造能力",
            subtitle: "完整的一站式生產解決方案",
            plastic: {
                title: "先進塑料加工",
                description: "用於精密塑料部件的最先進3D列印、CNC加工、射出成型和吹塑成型能力。",
                features: {
                    feature1: "3D列印",
                    feature2: "CNC切割", 
                    feature3: "射出成型",
                    feature4: "吹塑成型"
                }
            },
            metal: {
                title: "專業金屬加工",
                description: "配備專業CNC車床、沖壓、焊接和表面處理能力的完整金屬加工設施。",
                features: {
                    feature1: "CNC車床",
                    feature2: "金屬沖壓",
                    feature3: "專業焊接", 
                    feature4: "表面處理"
                }
            },
            wood: {
                title: "專業木材加工",
                description: "具有先進CNC板材加工和傳統工藝專業知識的綜合木工設施。",
                features: {
                    feature1: "CNC面板",
                    feature2: "精密切割",
                    feature3: "傳統工藝", 
                    feature4: "表面拋光"
                }
            },
            service: {
                title: "一條龍服務",
                description: "從設計打樣到批量生產和運輸的完整端到端服務。",
                features: {
                    feature1: "設計&打樣",
                    feature2: "批量生產",
                    feature3: "品質檢測",
                    feature4: "物流&運輸"
                }
            }
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = languages;
}
// Ensure global access for browser scripts like chat.js
if (typeof window !== 'undefined') {
    window.languages = languages;
}
