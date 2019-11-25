<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
      >
        <router-view/>
        <material-card
          v-if="!$route.params.id"
          color="green"
        >
          <v-card-title>
            <v-dialog
              v-model="dialog"
              max-width="1000px"
              persistent
            >
              <v-btn
                slot="activator"
                color="info"
              >
                <v-icon left>mdi-plus</v-icon>
                Neuer Reise
              </v-btn>

              <custom-dialog>
                <template slot="title">Neue Reise</template>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex
                      xs12
                      sm6>
                      <v-text-field
                        v-validate="'max:35'"
                        v-model="editedItem.name"
                        :error-messages="errors.collect('name')"
                        name="name"
                        label="Name"
                        counter="35"
                      />
                    </v-flex>
                    <v-flex
                      xs12
                      sm6>
                      <v-text-field
                        v-validate="'max:35'"
                        v-model="editedItem.timeframe"
                        :error-messages="errors.collect('timeframe')"
                        name="timeframe"
                        label="Zeitraum"
                        counter="35"
                      />
                    </v-flex>
                    <v-flex xs12>
                      <v-checkbox
                        v-model="editedItem.active"
                        label="Reise zur Anmeldung aktiv schalten?"
                      />
                    </v-flex>
                  </v-layout>
                </v-container>
                <template slot="actions">
                  {{ saveinfo }}
                  <v-btn
                    color="primary"
                    flat
                    @click.native="dialog = false"
                  >Abbruch</v-btn>
                  <v-btn
                    :loading = "saveLoading"
                    color="info"
                    dark
                    @click.native="dialog = false"
                  >Speichern</v-btn>
                </template>
              </custom-dialog>
            </v-dialog>
            <v-spacer/>
            <v-spacer/>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Suche"
              single-line
              hide-details
            />
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.participants }}</td>
              <td>{{ item.timeframe }}</td>
              <td>{{ item.created_at }}</td>
              <td>
                <v-icon
                  v-if="item.active"
                  color="success">mdi-check-circle</v-icon>
                <v-icon
                  v-else
                  color="error">mdi-close-circle</v-icon>
              </td>
              <td class="text-xs-right">
                <v-tooltip
                  top
                  content-class="top">
                  <v-btn
                    slot="activator"
                    class="v-btn--simple"
                    icon
                  >
                    <v-icon color="info">mdi-link</v-icon>
                  </v-btn>
                  <span>Link kopieren</span>
                </v-tooltip>
                <v-tooltip
                  top
                  content-class="top">
                  <v-btn
                    slot="activator"
                    class="v-btn--simple"
                    icon
                  >
                    <v-icon color="info">mdi-content-copy</v-icon>
                  </v-btn>
                  <span>Reise duplizieren</span>
                </v-tooltip>
                <v-tooltip
                  top
                  content-class="top">
                  <v-btn
                    slot="activator"
                    class="v-btn--simple"
                    icon
                  >
                    <router-link :to="{ name: 'Reise bearbeiten', params: { id: item.id }}">
                      <v-icon color="info">mdi-pencil</v-icon>
                    </router-link>
                  </v-btn>
                  <span>Bearbeiten</span>
                </v-tooltip>
                <v-tooltip
                  top
                  content-class="top">
                  <v-btn
                    slot="activator"
                    class="v-btn--simple"
                    icon
                  >
                    <v-icon color="error">mdi-delete</v-icon>
                  </v-btn>
                  <span>Löschen</span>
                </v-tooltip>
              </td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    search: '',
    dialog: false,
    editedItem: {},
    saveinfo: '',
    saveLoading: false,
    headers: [
      {
        sortable: false,
        text: 'ID',
        value: 'id'
      },
      {
        sortable: false,
        text: 'Name',
        value: 'name'
      },
      {
        sortable: false,
        text: 'Teilnehmer',
        value: 'participants'
      },
      {
        sortable: false,
        text: 'Zeitraum',
        value: 'timeframe'
      },
      {
        sortable: false,
        text: 'Erstellt am',
        value: 'created_at'
      },
      {
        sortable: false,
        text: 'Aktiv',
        value: 'active'
      },
      {
        sortable: false,
        text: 'Aktionen',
        value: 'actions',
        align: 'right'
      }
    ],
    items: [
      {
        id: 1,
        name: 'Japan',
        participants: '40/44',
        timeframe: 'August 2019',
        created_at: '14.05.2019',
        active: 1
      },
      {
        id: 2,
        name: 'Iran',
        participants: '20/22',
        timeframe: 'Oktober 2019',
        created_at: '03.05.2019',
        active: 0
      },
      {
        id: 3,
        name: 'USA',
        participants: '57/57',
        timeframe: 'September 2019',
        created_at: '14.02.2019',
        active: 1
      },
      {
        id: 4,
        name: 'Skandinavien',
        participants: '4/8',
        timeframe: 'April 2018',
        created_at: '03.05.2018',
        active: 0
      },
      {
        id: 5,
        name: 'Indien',
        participants: '50/50',
        timeframe: 'März 2018',
        created_at: '03.01.2018',
        active: 0
      },
      {
        id: 6,
        name: 'Österreich',
        participants: '30/34',
        timeframe: 'Februar 2018',
        created_at: '03.01.2018',
        active: 0
      }
    ]
  })
}
</script>
