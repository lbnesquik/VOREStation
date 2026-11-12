/datum/decl/emote/audible/belch
	key = "belch"
	emote_message_3p = "belches."
	emote_message_mute_3p = "acts out a belch."
	message_type = AUDIBLE_MESSAGE
	sound_preferences = list(/datum/preference/toggle/emote_noises, /datum/preference/toggle/belch_noises)

/datum/decl/emote/audible/belch/get_emote_sound(atom/user)
	return list(
			"sound" = sound(get_sfx("belches")),
			"vol" = emote_volume / 2
		)

/datum/decl/emote/audible/belch/do_extra(atom/user, atom/target)
	. = ..()

	var/gasid = GAS_CO2
	var/mob/living/carbon/human/H = src
	if(H.species && H.species.exhale_type)
		gasid = H.species.exhale_type
	var/datum/gas_mixture/grave_breath = new()
	grave_breath.adjust_gas(gasid, BREATH_MOLES*30)
	grave_breath.temperature = H.bodytemperature

	var/atom/location = H.loc
	location.assume_air(grave_breath)
