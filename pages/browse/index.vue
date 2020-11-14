<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="3"
          v-for="shop in shops"
          :key="shop.shopname"
        >
          <MiniShop
            :shopname="shop.shopname"
            :location="shop.location"
            :age="shop.age"
            :philosophy="shop.philosophy"
          ></MiniShop>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    shops: [
      {
        shopname: "tarilia",
        location: "Berlin",
        age: "22",
        philosophy: "lass krachen, aber komm zwischendurch auch mal zur Ruhe"
      },
      {
        shopname: "Papa Franz Shoppt",
        location: "Nürnberg",
        age: "27",
        philosophy: "lass krachen, aber komm zwischendurch auch mal zur Ruhe"
      },
      {
        shopname: "Sissis Shop",
        location: "München",
        age: "41",
        philosophy: "lass krachen, aber komm zwischendurch auch mal zur Ruhe"
      },
      {
        shopname: "Chris Gone Wild",
        location: "Wilhelmshaven",
        age: "30",
        philosophy: "lass krachen, aber komm zwischendurch auch mal zur Ruhe"
      },
      {
        shopname: "Klausis Fundgrube",
        location: "Bremen",
        age: "55",
        philosophy: "lass krachen, aber komm zwischendurch auch mal zur Ruhe"
      }
    ]
  })
};
</script>

<style></style>
