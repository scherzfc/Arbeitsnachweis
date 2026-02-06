// ===== Camping Packing List Application =====

// Initial data with all essential camping items
const defaultData = {
    categories: [
        {
            id: 'zelt-schlafen',
            name: 'Zelt & Schlafen',
            icon: '🏕️',
            items: [
                { id: 1, name: 'Zelt (inkl. Gestänge, Heringe, Abspannleinen)', checked: false },
                { id: 2, name: 'Hammer für Heringe', checked: false },
                { id: 3, name: 'Zeltunterlage / Tarp', checked: false },
                { id: 4, name: 'Isomatten oder Luftmatratzen', checked: false },
                { id: 5, name: 'Schlafsäcke', checked: false },
                { id: 6, name: 'Kopfkissen (aufblasbar)', checked: false },
                { id: 7, name: 'Schlafbrille & Ohropax', checked: false },
                { id: 8, name: 'Decken für kühle Nächte', checked: false }
            ]
        },
        {
            id: 'kueche',
            name: 'Küche & Verpflegung',
            icon: '🍳',
            items: [
                { id: 9, name: 'Campingkocher', checked: false },
                { id: 10, name: 'Gaskartuschen / Brennstoff', checked: false },
                { id: 11, name: 'Töpfe & Pfannen', checked: false },
                { id: 12, name: 'Campinggeschirr & Besteck', checked: false },
                { id: 13, name: 'Scharfe Messer & Schneidebrett', checked: false },
                { id: 14, name: 'Dosenöffner & Korkenzieher', checked: false },
                { id: 15, name: 'Pfannenwender & Kochbesteck', checked: false },
                { id: 16, name: 'Kühlbox oder Camping-Kühlschrank', checked: false },
                { id: 17, name: 'Wasserkanister', checked: false },
                { id: 18, name: 'Spülmittel & Schwamm', checked: false },
                { id: 19, name: 'Geschirrtücher', checked: false },
                { id: 20, name: 'Müllbeutel', checked: false },
                { id: 21, name: 'Feuerzeug / Streichhölzer', checked: false },
                { id: 22, name: 'Gewürze & Öl', checked: false },
                { id: 23, name: 'Kaffee / Tee', checked: false },
                { id: 24, name: 'Haltbare Lebensmittel', checked: false }
            ]
        },
        {
            id: 'moebel-komfort',
            name: 'Möbel & Komfort',
            icon: '🪑',
            items: [
                { id: 25, name: 'Campingtisch', checked: false },
                { id: 26, name: 'Campingstühle', checked: false },
                { id: 27, name: 'Campinglampe / Laterne', checked: false },
                { id: 28, name: 'Stirnlampen', checked: false },
                { id: 29, name: 'Taschenlampe', checked: false },
                { id: 30, name: 'Verlängerungskabel', checked: false },
                { id: 31, name: 'CEE-Adapter für Campingplatz', checked: false },
                { id: 32, name: 'Wäscheleine & Klammern', checked: false },
                { id: 33, name: 'Sonnenschirm / Markise', checked: false },
                { id: 34, name: 'Picknickdecke', checked: false }
            ]
        },
        {
            id: 'hygiene',
            name: 'Hygiene & Körperpflege',
            icon: '🧴',
            items: [
                { id: 35, name: 'Kulturbeutel mit Pflegeprodukten', checked: false },
                { id: 36, name: 'Handtücher (schnelltrocknend)', checked: false },
                { id: 37, name: 'Zahnbürste & Zahnpasta', checked: false },
                { id: 38, name: 'Duschgel & Shampoo', checked: false },
                { id: 39, name: 'Sonnencreme (hoher LSF)', checked: false },
                { id: 40, name: 'Insektenschutzmittel', checked: false },
                { id: 41, name: 'Toilettenpapier', checked: false },
                { id: 42, name: 'Feuchttücher', checked: false },
                { id: 43, name: 'Campingdusche (optional)', checked: false }
            ]
        },
        {
            id: 'erste-hilfe',
            name: 'Erste Hilfe & Medizin',
            icon: '🩹',
            items: [
                { id: 44, name: 'Erste-Hilfe-Set', checked: false },
                { id: 45, name: 'Persönliche Medikamente', checked: false },
                { id: 46, name: 'Schmerzmittel', checked: false },
                { id: 47, name: 'Pflaster & Verbände', checked: false },
                { id: 48, name: 'Desinfektionsmittel', checked: false },
                { id: 49, name: 'Zeckenzange', checked: false },
                { id: 50, name: 'After-Sun Lotion', checked: false }
            ]
        },
        {
            id: 'kleidung',
            name: 'Kleidung',
            icon: '👕',
            items: [
                { id: 51, name: 'Wetterfeste Jacke / Regenjacke', checked: false },
                { id: 52, name: 'Warmer Pullover / Fleece', checked: false },
                { id: 53, name: 'T-Shirts', checked: false },
                { id: 54, name: 'Lange Hosen', checked: false },
                { id: 55, name: 'Kurze Hosen', checked: false },
                { id: 56, name: 'Unterwäsche & Socken', checked: false },
                { id: 57, name: 'Schlafkleidung', checked: false },
                { id: 58, name: 'Badesachen', checked: false },
                { id: 59, name: 'Feste Wanderschuhe', checked: false },
                { id: 60, name: 'Sandalen / Flip-Flops', checked: false },
                { id: 61, name: 'Sonnenhut / Kappe', checked: false }
            ]
        },
        {
            id: 'dokumente',
            name: 'Dokumente & Sicherheit',
            icon: '📄',
            items: [
                { id: 62, name: 'Personalausweis / Reisepass', checked: false },
                { id: 63, name: 'Führerschein', checked: false },
                { id: 64, name: 'Krankenversicherungskarte', checked: false },
                { id: 65, name: 'Fahrzeugpapiere', checked: false },
                { id: 66, name: 'Anhänger-Papiere', checked: false },
                { id: 67, name: 'Campingplatz-Buchung', checked: false },
                { id: 68, name: 'Bargeld & EC-/Kreditkarten', checked: false },
                { id: 69, name: 'Warndreieck & Warnwesten', checked: false },
                { id: 70, name: 'Werkzeugset', checked: false },
                { id: 71, name: 'Abschleppseil', checked: false }
            ]
        },
        {
            id: 'technik',
            name: 'Technik & Unterhaltung',
            icon: '📱',
            items: [
                { id: 72, name: 'Smartphone & Ladekabel', checked: false },
                { id: 73, name: 'Powerbank', checked: false },
                { id: 74, name: 'Kamera', checked: false },
                { id: 75, name: 'Bluetooth-Lautsprecher', checked: false },
                { id: 76, name: 'Bücher / E-Reader', checked: false },
                { id: 77, name: 'Kartenspiele / Gesellschaftsspiele', checked: false },
                { id: 78, name: 'Fernglas', checked: false },
                { id: 79, name: 'Navigationssystem / Karten', checked: false }
            ]
        },
        {
            id: 'outdoor',
            name: 'Outdoor-Aktivitäten',
            icon: '🚴',
            items: [
                { id: 80, name: 'Fahrräder (falls geplant)', checked: false },
                { id: 81, name: 'Wanderstöcke', checked: false },
                { id: 82, name: 'Angel & Zubehör (falls geplant)', checked: false },
                { id: 83, name: 'Badeutensilien', checked: false },
                { id: 84, name: 'Outdoor-Spiele (Frisbee, Ball)', checked: false },
                { id: 85, name: 'Klappstuhl für unterwegs', checked: false }
            ]
        }
    ]
};

// App State
let appData = loadData();
let editingItemId = null;
let deletingItemId = null;
let currentFilter = 'all';

// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const addItemBtn = document.getElementById('addItemBtn');
const modalOverlay = document.getElementById('modalOverlay');
const deleteModalOverlay = document.getElementById('deleteModalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalClose = document.getElementById('modalClose');
const itemForm = document.getElementById('itemForm');
const itemName = document.getElementById('itemName');
const itemCategory = document.getElementById('itemCategory');
const newCategory = document.getElementById('newCategory');
const cancelBtn = document.getElementById('cancelBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Initialize App
function init() {
    renderCategories();
    renderCategoryFilter();
    updateProgress();
    setupEventListeners();
}

// Load data from localStorage
function loadData() {
    const saved = localStorage.getItem('campingPacklist');
    if (saved) {
        return JSON.parse(saved);
    }
    return JSON.parse(JSON.stringify(defaultData));
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('campingPacklist', JSON.stringify(appData));
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', handleSearch);

    // Add Item
    addItemBtn.addEventListener('click', openAddModal);

    // Modal controls
    modalClose.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Form submit
    itemForm.addEventListener('submit', handleFormSubmit);

    // Delete modal controls
    cancelDeleteBtn.addEventListener('click', closeDeleteModal);
    confirmDeleteBtn.addEventListener('click', confirmDelete);
    deleteModalOverlay.addEventListener('click', (e) => {
        if (e.target === deleteModalOverlay) closeDeleteModal();
    });

    // New category input
    newCategory.addEventListener('input', () => {
        if (newCategory.value) {
            itemCategory.value = '';
        }
    });

    itemCategory.addEventListener('change', () => {
        if (itemCategory.value) {
            newCategory.value = '';
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeDeleteModal();
        }
    });
}

// Render all categories
function renderCategories() {
    const searchTerm = searchInput.value.toLowerCase();
    let filteredCategories = appData.categories;

    // Filter by category
    if (currentFilter !== 'all') {
        filteredCategories = filteredCategories.filter(cat => cat.id === currentFilter);
    }

    // Check if we have any items after filtering
    let totalVisibleItems = 0;

    const html = filteredCategories.map(category => {
        let items = category.items;

        // Filter by search term
        if (searchTerm) {
            items = items.filter(item =>
                item.name.toLowerCase().includes(searchTerm)
            );
        }

        if (items.length === 0) return '';

        totalVisibleItems += items.length;
        const checkedCount = items.filter(item => item.checked).length;

        return `
            <div class="category-card" data-category-id="${category.id}">
                <div class="category-header" onclick="toggleCategory('${category.id}')">
                    <div class="category-title">
                        <span class="category-icon">${category.icon}</span>
                        <span class="category-name">${category.name}</span>
                        <span class="category-count">${checkedCount}/${items.length}</span>
                    </div>
                    <svg class="category-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <div class="category-items">
                    ${items.map(item => renderItem(item)).join('')}
                </div>
            </div>
        `;
    }).join('');

    if (totalVisibleItems === 0 && searchTerm) {
        categoriesContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3 class="empty-state-title">Keine Ergebnisse</h3>
                <p class="empty-state-text">Für "${searchTerm}" wurden keine Einträge gefunden.</p>
            </div>
        `;
    } else if (totalVisibleItems === 0) {
        categoriesContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <h3 class="empty-state-title">Noch keine Einträge</h3>
                <p class="empty-state-text">Füge deinen ersten Eintrag hinzu!</p>
            </div>
        `;
    } else {
        categoriesContainer.innerHTML = html;
    }
}

// Render single item
function renderItem(item) {
    return `
        <div class="item ${item.checked ? 'checked' : ''}" data-item-id="${item.id}">
            <label class="item-checkbox">
                <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleItem(${item.id})">
                <span class="checkmark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
            </label>
            <span class="item-name">${escapeHtml(item.name)}</span>
            <div class="item-actions">
                <button class="item-btn edit" onclick="openEditModal(${item.id})" title="Bearbeiten">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </button>
                <button class="item-btn delete" onclick="openDeleteModal(${item.id})" title="Löschen">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

// Render category filter buttons
function renderCategoryFilter() {
    const buttons = [
        '<button class="filter-btn active" data-category="all">Alle</button>'
    ];

    appData.categories.forEach(category => {
        buttons.push(`
            <button class="filter-btn" data-category="${category.id}">
                ${category.icon} ${category.name}
            </button>
        `);
    });

    categoryFilter.innerHTML = buttons.join('');

    // Add click handlers
    categoryFilter.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.category;
            categoryFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCategories();
        });
    });
}

// Update category select options in modal
function updateCategorySelect() {
    const options = ['<option value="">Kategorie wählen...</option>'];
    appData.categories.forEach(category => {
        options.push(`<option value="${category.id}">${category.icon} ${category.name}</option>`);
    });
    itemCategory.innerHTML = options.join('');
}

// Toggle category collapse
function toggleCategory(categoryId) {
    const card = document.querySelector(`[data-category-id="${categoryId}"]`);
    card.classList.toggle('collapsed');
}

// Toggle item checked state
function toggleItem(itemId) {
    for (const category of appData.categories) {
        const item = category.items.find(i => i.id === itemId);
        if (item) {
            item.checked = !item.checked;
            saveData();
            renderCategories();
            updateProgress();

            if (item.checked) {
                showToast('✓ Erledigt!');
            }
            break;
        }
    }
}

// Update progress bar
function updateProgress() {
    let total = 0;
    let checked = 0;

    appData.categories.forEach(category => {
        total += category.items.length;
        checked += category.items.filter(item => item.checked).length;
    });

    const percentage = total > 0 ? (checked / total) * 100 : 0;
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${checked} von ${total} erledigt`;

    // Celebration when all done
    if (checked === total && total > 0) {
        showToast('🎉 Alles gepackt! Gute Reise!');
    }
}

// Handle search
function handleSearch() {
    renderCategories();
}

// Open add modal
function openAddModal() {
    editingItemId = null;
    modalTitle.textContent = 'Neuer Eintrag';
    itemForm.reset();
    updateCategorySelect();
    modalOverlay.classList.add('active');
    itemName.focus();
}

// Open edit modal
function openEditModal(itemId) {
    editingItemId = itemId;
    modalTitle.textContent = 'Eintrag bearbeiten';
    updateCategorySelect();

    // Find item and its category
    for (const category of appData.categories) {
        const item = category.items.find(i => i.id === itemId);
        if (item) {
            itemName.value = item.name;
            itemCategory.value = category.id;
            break;
        }
    }

    newCategory.value = '';
    modalOverlay.classList.add('active');
    itemName.focus();
}

// Close modal
function closeModal() {
    modalOverlay.classList.remove('active');
    editingItemId = null;
    itemForm.reset();
}

// Handle form submit
function handleFormSubmit(e) {
    e.preventDefault();

    const name = itemName.value.trim();
    let categoryId = itemCategory.value;
    const newCategoryName = newCategory.value.trim();

    if (!name) {
        showToast('Bitte gib einen Namen ein');
        return;
    }

    // Create new category if specified
    if (newCategoryName) {
        categoryId = newCategoryName.toLowerCase().replace(/\s+/g, '-');
        const existingCategory = appData.categories.find(c => c.id === categoryId);

        if (!existingCategory) {
            appData.categories.push({
                id: categoryId,
                name: newCategoryName,
                icon: '📦',
                items: []
            });
        }
    }

    if (!categoryId) {
        showToast('Bitte wähle eine Kategorie');
        return;
    }

    if (editingItemId !== null) {
        // Edit existing item
        let oldCategoryIndex = -1;
        let itemIndex = -1;

        // Find current item location
        for (let c = 0; c < appData.categories.length; c++) {
            const idx = appData.categories[c].items.findIndex(i => i.id === editingItemId);
            if (idx !== -1) {
                oldCategoryIndex = c;
                itemIndex = idx;
                break;
            }
        }

        if (oldCategoryIndex !== -1 && itemIndex !== -1) {
            const item = appData.categories[oldCategoryIndex].items[itemIndex];
            item.name = name;

            // If category changed, move item
            if (appData.categories[oldCategoryIndex].id !== categoryId) {
                appData.categories[oldCategoryIndex].items.splice(itemIndex, 1);
                const newCategory = appData.categories.find(c => c.id === categoryId);
                if (newCategory) {
                    newCategory.items.push(item);
                }
            }
        }

        showToast('Eintrag aktualisiert');
    } else {
        // Add new item
        const newId = Date.now();
        const category = appData.categories.find(c => c.id === categoryId);

        if (category) {
            category.items.push({
                id: newId,
                name: name,
                checked: false
            });
            showToast('Eintrag hinzugefügt');
        }
    }

    saveData();
    renderCategories();
    renderCategoryFilter();
    updateProgress();
    closeModal();
}

// Open delete modal
function openDeleteModal(itemId) {
    deletingItemId = itemId;
    deleteModalOverlay.classList.add('active');
}

// Close delete modal
function closeDeleteModal() {
    deleteModalOverlay.classList.remove('active');
    deletingItemId = null;
}

// Confirm delete
function confirmDelete() {
    if (deletingItemId === null) return;

    for (const category of appData.categories) {
        const itemIndex = category.items.findIndex(i => i.id === deletingItemId);
        if (itemIndex !== -1) {
            category.items.splice(itemIndex, 1);
            break;
        }
    }

    // Remove empty categories (except default ones)
    appData.categories = appData.categories.filter(cat => {
        const isDefault = defaultData.categories.some(d => d.id === cat.id);
        return isDefault || cat.items.length > 0;
    });

    saveData();
    renderCategories();
    renderCategoryFilter();
    updateProgress();
    closeDeleteModal();
    showToast('Eintrag gelöscht');
}

// Show toast notification
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 2500);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make functions globally accessible
window.toggleCategory = toggleCategory;
window.toggleItem = toggleItem;
window.openEditModal = openEditModal;
window.openDeleteModal = openDeleteModal;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
