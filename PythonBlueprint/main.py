from PythonBlueprint.configs.IdConfig import *
from random import choice
from Cells import StandardField

# facets_count = 4
# facet_length = 10

fields_data = {}

game_fields_object_linker = [mystery_field_id, tax_income_field_id, luxury_field_id,
                             chanel_field_id, hugo_boss_filed_id,
                             adidas_field_id, puma_field_id, lacoste_filed_id,
                             vk_field_id, facebook_field_id, twitter_field_id,
                             mercedes_field_id, audi_field_id, ford_field_id, land_rover_field_id,
                             coca_cola_field_id, pepsi_field_id, fanta_field_id,
                             american_airlines_field_id, lufthansa_field_id, british_airways_field_id,
                             mcdonalds_field_id, burger_king_field_id, kfc_field_id,
                             holiday_inn_field_id, radisson_field_id, novotel_field_id,
                             rockstar_field_id, rovio_field_id,
                             apple_field_id, nokia_field_id]


class GameSession:
    DEFAULT_FIELD_COUNT = 1

    game_mode = "unbalanced"
    facets_count = 4
    facet_length = 10
    field_blueprint = None
    corner_cells = []
    end_field_map = {}

    game_field_cells_quota = {mystery_field_id: 6, tax_income_field_id: 1, luxury_field_id: 1,
                              }

    def __init__(self, player_counter=2, added_corner_field_id=jackpot_field_id):

        # play field precreating

        self.game_field_cells_quota = self.get_quota_with_added_lonely_fields(self.game_field_cells_quota)
        self.corner_cells = [start_field_id, jail_field_id, added_corner_field_id, prison_teleport_field_id]
        self.field_blueprint = self.get_blueprint_of_field_builder()
        self.fields_loaded = self.fields_loader()
        print(self.field_blueprint)
        print(self.fields_loaded)

    def get_quota_with_added_lonely_fields(self, initial_field_quota_dict):
        for filed_id in game_fields_object_linker:
            if filed_id not in initial_field_quota_dict:
                initial_field_quota_dict[filed_id] = self.DEFAULT_FIELD_COUNT
        return initial_field_quota_dict

    def get_blueprint_of_field_builder(self, raw_of_not_duplicate_id=1):
        last_fields_id_stack = [0 for _ in range(raw_of_not_duplicate_id)]

        def get_random_cell_of_field():
            sorted_fields = [field_id for field_id in list(self.game_field_cells_quota.keys())
                             if self.game_field_cells_quota[field_id] > 0]
            if len(sorted_fields) > raw_of_not_duplicate_id:
                sorted_fields = [field_id for field_id in sorted_fields if field_id not in last_fields_id_stack]
            try:
                new_field_id = choice(sorted_fields)
                self.game_field_cells_quota[new_field_id] -= 1
            except IndexError:
                new_field_id = default_field_id
            del last_fields_id_stack[0]
            last_fields_id_stack.append(new_field_id)
            return new_field_id

        return [[self.corner_cells[facet_id]] + [get_random_cell_of_field() for _ in range(self.facet_length - 1)]
                for facet_id in range(self.facets_count)]

    def fields_loader(self):
        return [StandardField(field_id) for field_id in game_fields_object_linker]


a = GameSession()
