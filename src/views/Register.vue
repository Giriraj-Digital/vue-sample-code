<template>
  <v-app>
    <v-content>
      <v-container
        fluid
        fill-height>
        <v-layout
          align-center
          justify-center>
          <v-flex
            xs12
            sm8
            md4>
            <v-card class="elevation-12">
              <v-toolbar
                dark
                class="toolbar__login"
                color="info">
                <v-toolbar-title class="white--text ">Ihre Registrierung für die Reise Japan 2019</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-container py-0>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field
                          v-validate="'required'"
                          id="company"
                          v-model="editedItem.company"
                          :error-messages="errors.collect('company')"
                          prepend-icon="mdi-domain"
                          name="company"
                          label="Firma/Institution"
                          type="text"/>
                      </v-flex>
                      <v-flex
                        xs12
                        sm6>
                        <v-text-field
                          v-validate="'required'"
                          id="first_name"
                          v-model="editedItem.first_name"
                          :error-messages="errors.collect('first_name')"
                          prepend-icon="mdi-account"
                          name="first_name"
                          label="Vorname"
                          type="text"/>
                      </v-flex>
                      <v-flex
                        xs12
                        sm6>
                        <v-text-field
                          v-validate="'required'"
                          id="last_name"
                          v-model="editedItem.last_name"
                          :error-messages="errors.collect('last_name')"
                          name="last_name"
                          label="Nachname"
                          type="text"/>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          v-validate="'required'"
                          id="position"
                          v-model="editedItem.position"
                          :error-messages="errors.collect('position')"
                          prepend-icon="mdi-label"
                          name="position"
                          label="Funktion"
                          type="text"/>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          v-validate="'required'"
                          id="street"
                          v-model="editedItem.street"
                          :error-messages="errors.collect('street')"
                          prepend-icon="mdi-map-marker"
                          name="street"
                          label="Straße"
                          type="text"/>
                      </v-flex>
                      <v-flex
                        xs12
                        sm4>
                        <v-text-field
                          v-validate="'required'"
                          id="zip"
                          v-model="editedItem.zip"
                          :error-messages="errors.collect('zip')"
                          prepend-icon="mdi-map-marker"
                          name="zip"
                          label="PLZ"
                          type="text"/>
                      </v-flex>
                      <v-flex
                        xs12
                        sm8>
                        <v-text-field
                          v-validate="'required'"
                          id="city"
                          v-model="editedItem.city"
                          :error-messages="errors.collect('city')"
                          name="city"
                          label="Ort"
                          type="text"/>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          v-validate="'required'"
                          id="phone"
                          v-model="editedItem.phone"
                          :error-messages="errors.collect('phone')"
                          prepend-icon="mdi-phone"
                          name="phone"
                          label="Telefon"
                          type="text"/>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          v-validate="'required'"
                          id="cell_phone"
                          v-model="editedItem.cell_phone"
                          :error-messages="errors.collect('cell_phone')"
                          prepend-icon="mdi-cellphone-iphone"
                          name="cell_phone"
                          label="Mobil-Nr. während der Reise"
                          type="text"/>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          v-validate="'required'"
                          id="email"
                          v-model="editedItem.email"
                          :error-messages="errors.collect('email')"
                          prepend-icon="mdi-at"
                          name="email"
                          label="E-Mail"
                          type="text"/>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          v-validate="'required'"
                          id="email_again"
                          v-model="editedItem.email_again"
                          :error-messages="errors.collect('email_again')"
                          prepend-icon="mdi-at"
                          name="email_again"
                          label="E-Mail wiederholen"
                          type="text"/>
                      </v-flex>
                      <v-flex xs12>
                        <v-checkbox
                          v-validate="'required'"
                          id="privacy_agreed"
                          v-model="editedItem.privacy_agreed"
                          :error-messages="errors.collect('privacy_agreed')"
                          label="Zustimmung zum Datenschutz XYZ"
                        />
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn color="primary">
                  Registrierung starten
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    editedItem: {}
  })
}
</script>
