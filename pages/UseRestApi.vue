<script setup>
import axios from "axios";
import Button from "primevue/button";
import { computed, onMounted, ref } from "vue";

const user = ref([]);
const searchQuery = ref("");
const newUserName = ref(""); // Для ввода имени нового пользователя
const currentEditUserId = ref(null); // Для хранения ID редактируемого пользователя
const currentEditUserName = ref(""); // Для хранения имени редактируемого пользователя

const url = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  try {
    const res = await axios.get(url);
    user.value = res.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    user.value = user.value.filter((item) => item.id !== id);
  } catch (error) {
    console.log(error);
  }
};

const addUser = async () => {
  if (newUserName.value.trim() === "") return; // Проверка на пустое имя
  try {
    const res = await axios.post(url, { username: newUserName.value });
    user.value.push(res.data); // Добавляем нового пользователя в local state
    newUserName.value = ""; // Очищаем поле ввода
  } catch (error) {
    console.error(error);
  }
};

const editUser = (id, username) => {
  currentEditUserId.value = id;
  currentEditUserName.value = username;
};

const updateUser = async () => {
  if (
    currentEditUserId.value === null ||
    currentEditUserName.value.trim() === ""
  )
    return; // Проверка
  try {
    await axios.put(`${url}/${currentEditUserId.value}`, {
      username: currentEditUserName.value,
    });
    const userToUpdate = user.value.find(
      (item) => item.id === currentEditUserId.value
    );
    userToUpdate.username = currentEditUserName.value; // Обновляем локальный список
    currentEditUserId.value = null; // Сбрасываем редактируемый ID
    currentEditUserName.value = ""; // Очищаем поле ввода
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchUsers();
});

const filteredUsers = computed(() => {
  return user.value.filter((item) => {
    return item.username
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
  });
});
</script>

<template>
  <div class="flex flex-col mt-10 ms-10 gap-10 max-w-[1300px]">
    <div class="my-5">Rest Api</div>
    <div class="flex gap-5">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search users"
        class="max-w-[300px] py-3 px-5 rounded-2xl border-2 border-gray-300"
      />
      <div class="flex gap-2">
        <input
          v-model="newUserName"
          type="text"
          placeholder="Enter new user name"
          class="max-w-[300px] py-3 px-5 rounded-2xl border-2 border-gray-300"
        />
        <Button @click="addUser" label="Add User" />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-5">
      <div v-for="item in filteredUsers" :key="item.id">
        <div class="items-center justify-between w-full UserCard">
          <div>
            <input
              v-if="currentEditUserId === item.id"
              v-model="currentEditUserName"
              type="text"
              placeholder="Edit name"
              class="px-2 py-1 border rounded"
            />
            <span v-else>{{ item.username }}</span>
          </div>
          <div class="flex gap-2">
            <Button
              v-if="currentEditUserId === item.id"
              @click="updateUser"
              label="Save"
            />
            <Button
              v-else
              @click="editUser(item.id, item.username)"
              label="Edit"
            />
            <Button
              @click="deleteUser(item.id)"
              severity="danger"
              icon="pi pi-trash"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
