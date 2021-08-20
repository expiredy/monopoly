from IdConfig import *
from random import choice

# facets_count = 4
# facet_length = 10

fields_data = {}

game_fields_object_linker = {mystery_field_id: 1, tax_income_field_id: 1, luxury_field_id: 1,
                             chanel_field_id: 1, hugo_boss_filed_id: 1,
                             adidas_field_id: 1, puma_field_id: 1, lacoste_filed_id: 1,
                             vk_field_id: 1, facebook_field_id: 1, twitter_field_id: 1,
                             mercedes_field_id: 1, audi_field_id: 1, ford_field_id: 1, land_rover_field_id: 1,
                             coca_cola_field_id: 1, pepsi_field_id: 1, fanta_field_id: 1,
                             american_airlines_field_id: 1, lufthansa_field_id: 1, british_airways_field_id: 1,
                             mcdonalds_field_id: 1, burger_king_field_id: 1, kfc_field_id: 1,
                             holiday_inn_field_id: 1, radisson_field_id: 1, novotel_field_id: 1,
                             rockstar_field_id: 1, rovio_field_id: 1,
                             apple_field_id: 1, nokia_field_id: 1}


class GameSession:
    DEFAULT_FIELD_COUNT = 1

    game_mode = "unbalanced"
    facets_count = 4
    facet_length = 10
    field_blueprint = None
    corner_cells = []

    game_field_cells_quota = {mystery_field_id: 6, tax_income_field_id: 1, luxury_field_id: 1,
                              }

    def __init__(self, player_counter=2, added_corner_field_id=jackpot_field_id):

        # play field precreating

        self.game_field_cells_quota = self.get_quota_with_added_lonely_fields(self.game_field_cells_quota)
        self.corner_cells = [start_field_id, jail_field_id, added_corner_field_id, prison_teleport_field_id]
        self.field_blueprint = self.get_blueprint_of_field_builder()
        print(self.field_blueprint)

    def get_quota_with_added_lonely_fields(self, initial_field_quota_dict):
        for filed_id in list(game_fields_object_linker.keys()):
            if filed_id not in initial_field_quota_dict:
                initial_field_quota_dict[filed_id] = self.DEFAULT_FIELD_COUNT
        return initial_field_quota_dict

    def get_blueprint_of_field_builder(self):
        def get_random_cell_of_field():
            sorted_fields = [field_id for field_id in list(self.game_field_cells_quota.keys())
                             if self.game_field_cells_quota[field_id] > 0]
            try:
                new_field_id = choice(sorted_fields)
                self.game_field_cells_quota[new_field_id] -= 1
            except IndexError:
                new_field_id = default_field_id
            return new_field_id

        return [[self.corner_cells[facet_id]] + [get_random_cell_of_field() for _ in range(self.facet_length - 1)]
                for facet_id in range(self.facets_count)]


a = GameSession()
