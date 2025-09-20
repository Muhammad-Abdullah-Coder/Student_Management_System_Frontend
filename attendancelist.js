const presentList = document.getElementById('presentList');
        const absentList = document.getElementById('absentList');

        function setStatus(button, name, status) {
            const row = button.closest('tr');
            const buttons = row.querySelectorAll('.btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (status === 'present') {
                addToList(name, presentList);
                removeFromList(name, absentList);
            } else {
                addToList(name, absentList);
                removeFromList(name, presentList);
            }
        }

        function addToList(name, list) {
            const existingItem = Array.from(list.children).find(li => li.textContent === name);
            if (!existingItem) {
                const listItem = document.createElement('li');
                listItem.textContent = name;
                list.appendChild(listItem);
            }
        }

        function removeFromList(name, list) {
            const listItem = Array.from(list.children).find(li => li.textContent === name);
            if (listItem) {
                list.removeChild(listItem);
            }
        }